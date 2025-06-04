import React from 'react';
import { Menu, X, ShoppingCart, Phone, Facebook, Instagram, Twitter, Search, Filter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedBrand, setSelectedBrand] = React.useState('');
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('');
  const [recommendedTyre, setRecommendedTyre] = React.useState<any>(null);
  const [vehicleSize, setVehicleSize] = React.useState('');
  const [drivingConditions, setDrivingConditions] = React.useState<string[]>([]);

  const tyres = [
    {
      id: 1,
      name: "Premium Sport RS",
      price: 85000,
      originalPrice: 100000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "High-performance sport tyre with exceptional grip",
      recommendedFor: {
        size: "Small",
        conditions: ["City", "Highway"]
      }
    },
    {
      id: 2,
      name: "All-Season Pro",
      price: 65000,
      originalPrice: 75000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Reliable all-season tyre for everyday driving",
      recommendedFor: {
        size: "Small",
        conditions: ["All-weather"]
      }
    },
    {
      id: 3,
      name: "Off-Road Master",
      price: 95000,
      originalPrice: 110000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Rugged tyre for challenging terrain",
      recommendedFor: {
        size: "Big",
        conditions: ["Off-road"]
      }
    },
    {
      id: 4,
      name: "Eco Comfort",
      price: 55000,
      originalPrice: 65000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Fuel-efficient tyre with smooth ride quality",
      recommendedFor: {
        size: "Small",
        conditions: ["City"]
      }
    },
    {
      id: 5,
      name: "Winter Expert",
      price: 75000,
      originalPrice: 85000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Superior winter performance and safety",
      recommendedFor: {
        size: "Small",
        conditions: ["All-weather"]
      }
    },
    {
      id: 6,
      name: "Ultra Grip Elite",
      price: 90000,
      originalPrice: 105000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Premium handling and durability",
      recommendedFor: {
        size: "Big",
        conditions: ["Highway"]
      }
    },
    {
      id: 7,
      name: "City Commuter",
      price: 60000,
      originalPrice: 70000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Perfect for urban driving conditions",
      recommendedFor: {
        size: "Small",
        conditions: ["City"]
      }
    },
    {
      id: 8,
      name: "Track Performance",
      price: 100000,
      originalPrice: 120000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Race-inspired design for maximum performance",
      recommendedFor: {
        size: "Small",
        conditions: ["Highway"]
      }
    },
    {
      id: 9,
      name: "SUV Commander",
      price: 85000,
      originalPrice: 95000,
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
      description: "Specifically designed for SUVs and crossovers",
      recommendedFor: {
        size: "Big",
        conditions: ["City", "Highway", "All-weather"]
      }
    }
  ];

  const handleDrivingConditionChange = (condition: string) => {
    setDrivingConditions(prev => 
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const findMatchingTyre = (e: React.FormEvent) => {
    e.preventDefault();
    
    const matchingTyre = tyres.find(tyre => {
      const sizeMatch = tyre.recommendedFor.size === vehicleSize;
      const conditionMatch = drivingConditions.some(condition => 
        tyre.recommendedFor.conditions.includes(condition)
      );
      return sizeMatch && conditionMatch;
    });

    setRecommendedTyre(matchingTyre || tyres[0]); // Default to first tyre if no match
  };

  const renderHome = () => (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg")'
          }}
        />
        
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="mb-4 text-white text-xl">
              Call in @ +2348035437390
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Tyres for Every Journey
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto px-4">
              Find the perfect tyres for your vehicle with our expert guidance and competitive prices
            </p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600">Experience the difference with our premium service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Expert Fitting",
                description: "Professional tyre fitting service by certified technicians"
              },
              {
                title: "Wide Selection",
                description: "Extensive range of premium and budget tyres for all vehicles"
              },
              {
                title: "Price Match",
                description: "We guarantee to match any genuine quote from our competitors"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderProducts = () => (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Our Tyres</h2>
          <div className="flex gap-4">
            <select 
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Brands</option>
              <option value="premium">Premium</option>
              <option value="sport">Sport</option>
              <option value="eco">Eco</option>
            </select>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Sizes</option>
              <option value="15">15"</option>
              <option value="16">16"</option>
              <option value="17">17"</option>
              <option value="18">18"</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tyres.map((tyre) => (
            <div key={tyre.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img 
                  src={tyre.image} 
                  alt={tyre.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₦{(tyre.originalPrice - tyre.price).toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tyre.name}</h3>
                <p className="text-gray-600 mb-4">{tyre.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₦{tyre.price.toLocaleString()}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">₦{tyre.originalPrice.toLocaleString()}</span>
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTyreFinder = () => (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect Tyre</h2>
          
          <form onSubmit={findMatchingTyre} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Make</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">Select Make</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="bmw">BMW</option>
                <option value="lexus">Lexus</option>
                <option value="mazda">Mazda</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="nissan">Nissan</option>
                <option value="range-rover">Range Rover</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="infiniti">Infiniti</option>
                <option value="volvo">Volvo</option>
                <option value="gmc">GMC</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="audi">Audi</option>
                <option value="peugeot">Peugeot</option>
                <option value="acura">Acura</option>   
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={vehicleSize}
                onChange={(e) => setVehicleSize(e.target.value)}
                required
              >
                <option value="">Select Size</option>
                <option value="Big">Big (SUV, Pick-up)</option>
                <option value="Small">Small</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Driving Conditions</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    checked={drivingConditions.includes('City')}
                    onChange={() => handleDrivingConditionChange('City')}
                  />
                  <span>City</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    checked={drivingConditions.includes('Highway')}
                    onChange={() => handleDrivingConditionChange('Highway')}
                  />
                  <span>Highway</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    checked={drivingConditions.includes('Off-road')}
                    onChange={() => handleDrivingConditionChange('Off-road')}
                  />
                  <span>Off-road</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    checked={drivingConditions.includes('All-weather')}
                    onChange={() => handleDrivingConditionChange('All-weather')}
                  />
                  <span>All-weather</span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Find Matching Tyres
            </button>
          </form>

          {recommendedTyre && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended Tyre</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src={recommendedTyre.image} 
                    alt={recommendedTyre.name}
                    className="w-full md:w-1/3 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{recommendedTyre.name}</h4>
                    <p className="text-gray-600 mb-4">{recommendedTyre.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-gray-900">₦{recommendedTyre.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through">₦{recommendedTyre.originalPrice.toLocaleString()}</span>
                    </div>
                    <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span 
                onClick={() => setCurrentPage('home')}
                className="text-2xl font-bold text-gray-900 cursor-pointer"
              >
                TyreShop
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                className={`text-gray-900 hover:text-gray-600 ${currentPage === 'home' ? 'font-semibold' : ''}`}
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('products'); }}
                className={`text-gray-900 hover:text-gray-600 ${currentPage === 'products' ? 'font-semibold' : ''}`}
              >
                Products
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('finder'); }}
                className={`text-gray-900 hover:text-gray-600 ${currentPage === 'finder' ? 'font-semibold' : ''}`}
              >
                Tyre Finder
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600">About</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Contact</a>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-6 w-6 text-gray-900" />
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsMenuOpen(false); }}
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('products'); setIsMenuOpen(false); }}
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Products
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('finder'); setIsMenuOpen(false); }}
                className="block px-3 py-2 text-gray-900 hover:bg-gray-100"
              >
                Tyre Finder
              </a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">About</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'products' && renderProducts()}
      {currentPage === 'finder' && renderTyreFinder()}

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TyreShop</h3>
              <p className="text-gray-400">Your trusted partner for quality tyres and professional service.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+2348035437390</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TyreShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;