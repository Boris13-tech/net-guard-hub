import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Formation {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  category: "cybersecurite" | "cloud" | "ia";
  level: "debutant" | "intermediaire" | "avance";
  price: number | null;
  image_url: string | null;
  objectives: string[] | null;
  prerequisites: string[] | null;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useFormations = () => {
  return useQuery({
    queryKey: ["formations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("formations")
        .select("*")
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Formation[];
    },
  });
};

export const useFeaturedFormations = () => {
  return useQuery({
    queryKey: ["formations", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("formations")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) throw error;
      return data as Formation[];
    },
  });
};

// Helper functions to format data for display
export const getLevelLabel = (level: Formation["level"]): string => {
  switch (level) {
    case "debutant":
      return "Débutant";
    case "intermediaire":
      return "Intermédiaire";
    case "avance":
      return "Avancé";
    default:
      return level;
  }
};

export const getCategoryLabel = (category: Formation["category"]): string => {
  switch (category) {
    case "cybersecurite":
      return "Cybersécurité";
    case "cloud":
      return "Cloud";
    case "ia":
      return "IA";
    default:
      return category;
  }
};

export const getDefaultImage = (category: Formation["category"]): string => {
  switch (category) {
    case "cybersecurite":
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
    case "cloud":
      return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
    case "ia":
      return "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
    default:
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
  }
};
