class localizacion{

  constructor(callback){
      if(navigator.geolocation){
        navigator.geolocation.geyCurrentPosition((position)=>{
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          callback();
        });
      }else{
        alert("NO soporta");
      }
  }
}
