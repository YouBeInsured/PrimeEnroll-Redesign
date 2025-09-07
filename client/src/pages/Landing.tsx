import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { Zap, Eye, Phone, Shield, Users, Settings, Star, CheckCircle, ArrowRight, ExternalLink, Car, Heart, TrendingUp, Target, Award } from "lucide-react";
import Header from "../components/Header";

export default function Landing() {
  const { t } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm font-medium">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 dark:bg-green-600 text-white">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {t("trust.topAgents")}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 dark:bg-blue-600 text-white">
                  <Shield className="w-4 h-4 mr-1" />
                  {t("trust.compliance")}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500 dark:bg-purple-600 text-white">
                  <Phone className="w-4 h-4 mr-1" />
                  {t("trust.noColdCalls")}
                </span>
              </div>

              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mr-3 tracking-wide">{t("hero.title1")}</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black italic tracking-tight">
                  {t("hero.title2")}
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="flex justify-center items-center mb-16">
                <a 
                  href="https://link.primeenroll.com/widget/booking/uVquxBRgaUR0XuEtO6h2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  <Zap className="w-6 h-6 mr-3 text-white" />
                  {t("hero.getStarted")}
                </a>
              </div>

              {/* Trust Logos */}
              <div className="opacity-60">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                  {t("hero.trustedBy")}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-400">Logo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">{t("services.title1")}</span><br />
                <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
                  {t("services.title2")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* ACA Health Insurance */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("service.aca.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("service.aca.description")}
                </p>
                <button className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                  {t("common.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>

              {/* Medicare */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("service.medicare.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("service.medicare.description")}
                </p>
                <button className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                  {t("common.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>

              {/* Final Expense */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("service.finalExpense.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("service.finalExpense.description")}
                </p>
                <button className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                  {t("common.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>

              {/* Auto Insurance */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("service.auto.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("service.auto.description")}
                </p>
                <button className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                  {t("common.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>

              {/* Life Insurance */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("service.life.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("service.life.description")}
                </p>
                <button className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                  {t("common.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>

              {/* Professional VA Support */}
              <Card className="group p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("service.va.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("service.va.description")}
                </p>
                <button className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors">
                  {t("common.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">{t("about.title1")}</span><br />
                  <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
                    {t("about.title2")}
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("about.description1")}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("about.description2")}
                </p>


                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {t("about.clarity.title")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t("about.clarity.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {t("about.support.title")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t("about.support.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scroll-animate">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional business team collaborating on strategy" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Partnership Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">{t("growth.title1")}</span><br />
                <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
                  {t("growth.title2")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                {t("growth.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step 1: Starting Point */}
              <Card className="p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("growth.step1.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("growth.step1.description")}
                </p>
              </Card>

              {/* Step 2: Growth Phase */}
              <Card className="p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("growth.step2.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("growth.step2.description")}
                </p>
              </Card>

              {/* Step 3: Scale Target */}
              <Card className="p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("growth.step3.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("growth.step3.description")}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("qualification.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                {t("qualification.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Requirements */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("qualification.requirement1")}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("qualification.requirement2")}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("qualification.requirement3")}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("qualification.requirement4")}
                  </span>
                </div>
              </div>

              {/* Consultation CTA */}
              <Card className="p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-primary-200 dark:border-gray-600">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("qualification.consultation")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t("qualification.consultationDesc")}
                  </p>
                  <a 
                    href="https://link.primeenroll.com/widget/booking/uVquxBRgaUR0XuEtO6h2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t("hero.getStarted")}
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">{t("features.title1")}</span><br />
                <span className="text-gray-800 dark:text-gray-300 font-normal">
                  {t("features.title2")}
                </span>
                <span className="text-gray-900 dark:text-white"> {t("features.title3")}</span><br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {t("features.title4")}
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("features.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("feature.compliance.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("feature.compliance.description")}
                </p>
              </Card>

              <Card className="p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("feature.agents.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("feature.agents.description")}
                </p>
              </Card>

              <Card className="p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("feature.performance.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("feature.performance.description")}
                </p>
              </Card>
            </div>

            {/* Performance Stats */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("testimonials.title")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("testimonials.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-8 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Sarah Mitchell" 
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      "We closed 27 enrollments in just 3 weeks. The Kick Starter package worked like magic for us."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Sarah Mitchell</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Licensed Agent, SecureCare Insurance Group</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-8 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="James Carter" 
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      "No chasing, no cold calling — just qualified leads straight to our CRM. Highly recommend the Kick Starter!"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">James Carter</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Senior Broker, HealthBridge Solutions</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-8 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Lisa Rodriguez" 
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      "It's the best return we've seen this enrollment season. I didn't expect leads at this quality for the price."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Lisa Rodriguez</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Insurance Agent, Rodriguez Insurance</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 4 */}
              <Card className="p-8 shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="David Thompson" 
                    className="w-16 h-16 rounded-full object-cover" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      "My schedule was a mess before. Now with a VA managing my calendar and leads, I can finally focus on selling."
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">David Thompson</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Sales Director, Elevate Medicare Advisors</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                {t("cta.subtitle")}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="font-semibold">{t("cta.feature1")}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="font-semibold">{t("cta.feature2")}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="font-semibold">{t("cta.feature3")}</span>
                </div>
              </div>

              <a 
                href="https://link.primeenroll.com/widget/booking/uVquxBRgaUR0XuEtO6h2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Eye className="w-5 h-5 mr-2" />
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">PE</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                    Prime Enroll
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Empowering ACA agents with real results through compliance, automation, 
                  and quality lead delivery systems.
                </p>
                <p className="text-sm text-gray-500">
                  Prime Enroll is a DBA of D4MC GROUP LLC.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {t("nav.services")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("about")}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {t("nav.about")}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection("testimonials")}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {t("nav.testimonials")}
                    </button>
                  </li>
                  <li>
                    <a href="/api/login" className="hover:text-primary-400 transition-colors">
                      {t("nav.agentPortal")}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>info@primeenroll.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Support Available 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; 2024 Prime Enroll. All rights reserved. | D4MC GROUP LLC</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
