const images =[
  'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
    'https://tse2.mm.bing.net/th?id=OIP.TjBNXWlIeS008Y7zpTr31gHaE8&pid=Api&P=0&h=180',
    'https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg',
    'https://tse4.mm.bing.net/th?id=OIP.f66kbA8yVCc-2A9Wr9dLaQHaGi&pid=Api&P=0&h=180',
    'https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg'
];
    function generateRandomImages(){
    const randomIndex = Math.floor(Math.random()*images.length);
    const randomImages = images[randomIndex];
    document.getElementById('randomImages').src=randomImages;
}
