export function HomeCard(){
    return (
   <div class="bg-white rounded-2xl shadow-lg overflow-hidden w-80 ">
  <a href="/listings/123" class="block relative group">
  
    <img 
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
      alt="listing_image" 
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    
    
    <div class="absolute inset-0 bg-black/40 flex items-end p-3 opacity-0 group-hover:opacity-100 transition">
   
    </div>
    
    
    <div class="p-4">
      <p class="text-lg font-semibold text-gray-900">Luxury Villa</p>
      <p class="text-gray-700">
        ₹ 12,500/night 
        <span class="text-sm text-gray-500">&nbsp; +18% GST</span>
      </p>
    </div>
  </a>
</div>

    )
}