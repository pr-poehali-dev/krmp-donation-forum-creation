import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      title: "Новичок",
      price: "150₽",
      description: "Базовый пакет для начинающих",
      features: ["100.000₽ игровой валюты", "VIP статус", "Эксклюзивный транспорт"],
      popular: false
    },
    {
      title: "Premium",
      price: "599₽", 
      description: "Расширенные возможности",
      features: ["Все из Starter", "Эксклюзивные скины", "Премиум дом", "Удвоенный опыт"],
      popular: true
    },
    {
      title: "Elite",
      price: "999₽",
      description: "Максимальные привилегии",
      features: ["Все из Premium", "Админ панель", "Кастомные команды", "Приоритетная поддержка"],
      popular: false
    }
  ];

  const forumTopics = [
    {
      title: "Новости сервера",
      replies: 45,
      lastPost: "2 мин назад",
      author: "AdminCRMP",
      hot: true
    },
    {
      title: "Правила сервера",
      replies: 128,
      lastPost: "1 час назад", 
      author: "ModeratorX",
      hot: false
    },
    {
      title: "Баги и предложения",
      replies: 67,
      lastPost: "15 мин назад",
      author: "Player123",
      hot: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Gamepad2" size={32} className="text-primary" />
                <h1 className="orbitron text-2xl font-bold text-foreground">КРМП</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#forum" className="text-foreground hover:text-primary transition-colors">Форум</a>
              <a href="#donate" className="text-foreground hover:text-primary transition-colors">Донат</a>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Characters */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/files/44790a52-9681-4771-be1a-f454d785ad87.png" 
            alt="КРМП персонаж"
            className="absolute left-8 bottom-0 h-96 opacity-20 animate-fade-in"
          />
          <img 
            src="https://cdn.poehali.dev/files/9f0fe3b1-3627-4b04-abbd-cbf174b92190.png" 
            alt="КРМП персонаж"
            className="absolute right-8 bottom-0 h-96 opacity-20 animate-fade-in"
          />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="orbitron text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            КРМП ПРОЕКТ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к лучшему игровому сообществу! Захватывающий геймплей, активное комьюнити и уникальные возможности ждут вас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Icon name="Users" size={20} className="mr-2" />
              Наше сообщество
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="orbitron text-4xl font-bold mb-4">Поддержите проект</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий пакет и получите эксклюзивные привилегии</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярно
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="orbitron text-2xl">{pkg.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary my-2">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Preview */}
      <section id="forum" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="orbitron text-4xl font-bold mb-4">Форум сообщества</h2>
            <p className="text-xl text-muted-foreground">Обсуждайте игру, делитесь опытом и находите новых друзей</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {forumTopics.map((topic, index) => (
              <Card key={index} className="hover:bg-card/60 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Icon name="MessageSquare" size={24} className="text-primary" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg">{topic.title}</h3>
                          {topic.hot && <Badge variant="destructive" className="text-xs">Горячо</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">от {topic.author}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="MessageCircle" size={16} />
                        <span>{topic.replies}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{topic.lastPost}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="ArrowRight" size={16} className="mr-2" />
              Перейти на форум
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-primary" />
                <span className="orbitron font-bold text-xl">КРМП</span>
              </div>
              <p className="text-muted-foreground">Лучший игровой проект с уникальными возможностями и активным сообществом.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Скачать</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Системные требования</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Обновления</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ВКонтакте</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Telegram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 КРМП Проект. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;