import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  Trash2, 
  LogOut, 
  Loader2, 
  ShieldAlert, 
  MessageSquare,
  Calendar,
  Phone
} from "lucide-react";
import Layout from "@/components/layout/Layout";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchMessages();
    }
  }, [user, isAdmin]);

  const fetchMessages = async () => {
    setLoadingMessages(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les messages.",
        variant: "destructive",
      });
    } else {
      setMessages(data || []);
    }
    setLoadingMessages(false);
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le message.",
        variant: "destructive",
      });
    } else {
      setMessages(messages.filter((m) => m.id !== id));
      toast({
        title: "Supprimé",
        description: "Le message a été supprimé.",
      });
    }
    setDeletingId(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-cyber" />
        </div>
      </Layout>
    );
  }

  if (!isAdmin) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
          <div className="text-center">
            <ShieldAlert className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Accès refusé</h1>
            <p className="text-gray-600 mb-4">
              Vous n'avez pas les permissions nécessaires pour accéder à cette page.
            </p>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Se déconnecter
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-cyber">Tableau de bord</h1>
              <p className="text-gray-600 mt-1">Gestion des messages de contact</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Se déconnecter
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-4 border-b border-gray-200 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-cyber" />
              <h2 className="font-semibold">Messages reçus ({messages.length})</h2>
            </div>

            {loadingMessages ? (
              <div className="p-8 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-cyber mx-auto" />
              </div>
            ) : messages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                Aucun message reçu pour le moment.
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-semibold text-gray-900">{msg.name}</span>
                          <span className="text-sm bg-cyber/10 text-cyber px-2 py-0.5 rounded">
                            {msg.subject}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {msg.email}
                          </span>
                          {msg.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {msg.phone}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(msg.created_at).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <p className="text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(msg.id)}
                        disabled={deletingId === msg.id}
                      >
                        {deletingId === msg.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
