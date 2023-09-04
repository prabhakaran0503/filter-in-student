var student=[
    {name:"quinncy",grade:96},
    {name:"jasan",grade:84},
    {name:"alexis",grade:100},
    {name:"sam",grade:65},
    {name:"katie",grade:90}
];

var ans=student.filter(function(e){
        // console.log(e);

      if(e.grade>=90){
        console.log(e);
      }      
   
})