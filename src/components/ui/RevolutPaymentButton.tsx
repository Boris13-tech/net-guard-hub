
import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface RevolutPaymentButtonProps {
  amount?: number;
  currency?: string;
  className?: string;
}

const RevolutPaymentButton: React.FC<RevolutPaymentButtonProps> = ({
  amount = 99,
  currency = "EUR",
  className = ""
}) => {
  const handlePayment = () => {
    const revolutUrl = `https://revolut.me/boriscyber?amount=${amount}&currency=${currency}`;
    
    // Ouvrir Revolut dans un nouvel onglet
    const revolutWindow = window.open(revolutUrl, "_blank");
    
    // Redirection automatique après 5 secondes
    setTimeout(() => {
      window.location.href = "/confirmation.html";
    }, 5000);
  };

  return (
    <Button
      onClick={handlePayment}
      className={`w-full text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg ${className}`}
      style={{ 
        backgroundColor: "#00AEEF",
        borderColor: "#00AEEF"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#0088CC";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#00AEEF";
      }}
    >
      <CreditCard className="w-4 h-4 mr-2" />
      Payer avec Revolut - {amount}€
    </Button>
  );
};

export default RevolutPaymentButton;
