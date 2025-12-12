import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Github, Linkedin, Mail, Check } from "lucide-react";
import { toast } from "sonner";

interface ContactSectionProps {
  onBack: () => void;
}

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/kamilasilva",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/kamilasilva",
    color: "hover:text-secondary",
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:hello@kamilasilva.dev",
    color: "hover:text-primary",
  },
];

const ContactSection = ({ onBack }: ContactSectionProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent! I'll get back to you soon.");

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.button
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </motion.button>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title mb-2">Let's Connect</h1>
          <p className="text-muted-foreground">
            Have a project in mind? Let's talk about it!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card-hover p-4 flex flex-col items-center gap-2 min-w-[100px] ${link.color} text-muted-foreground transition-colors`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <link.icon className="w-6 h-6" />
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="glass-card p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 disabled:opacity-70 transition-opacity"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                <motion.div
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
