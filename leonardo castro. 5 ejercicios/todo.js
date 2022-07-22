function resultado(){
var a = parseInt(document.form1.a1.value);
var b = parseInt(document.form1.b2.value);
var c = parseInt(document.form1.c3.value);

if(a<b & a<c & b<c)//posible respuesta
            {   
                document.write ("El número menor es: "+a+"");//print resultado
                document.write ("El número mayor es: "+c+"");//print resultado
            }
            else if(a<c & a<b & c<b)
            {
                document.write ("El número menor es: "+a+"");
                document.write ("El número mayor es: "+b+"");
            }
            else if(b<c & b<a & c<a)
            {
                document.write ("El número menor es: "+b+"");
                document.write ("El número mayor es: "+a+"");
            }
            else if(b<a & b<c & a<c){
                document.write ("El número menor es: "+b+"");
                document.write ("El número mayor es: "+c+"");
            }
            else if(c<a & c<b & a<b)
            {
                document.write ("El número menor es: "+c+"");
                document.write ("El número mayor es: "+b+"");
            }
            else if(c<=b & c<a & b<a)
            {
                document.write ("El número menor es: "+c+"");
                document.write ("El número mayor es: "+a+"");
            }
            else if(a>b & b==c)
            {
                document.write ("El número mayor es: "+a+"");
                document.write ("El segundo y tercer número son iguales menores: "+c+"");
            }
            else if(b>a & a==c)
            {
                document.write ("El número mayor es: "+b+"");
                document.write ("El primer y tercer número son iguales menores: "+c+"");
            }
            else if(c>a & a==b)
            {
                document.write ("El número mayor es: "+c+"");
                document.write ("El primer y segundo número son iguales menores: "+a+"");
            }
            else if(c<a & a==b)
            {
                document.write ("El número menor es: "+c+"");
                document.write ("El primer y segundo número son iguales mayores: "+a+"");
            }
            else if(b<a & a==c)
            {
                document.write ("El número  es menor: "+b+"");
                document.write ("El primer y tercer número son iguales mayores: "+c+"");
            }
            else if(a<b & b==c)
            {
                document.write ("El número menor es: "+a+"");
                document.write ("El segundo y tercer número son iguales mayores: "+c+"");
            }
            else if(a==b & a==c)
            {
                document.write ("Todos los números son iguales a: "+a+"");
            }
        }






function espaciotiempo(){
var a = parseInt(document.form2.a1.value);
var b = parseInt(document.form2.b2.value);
if (a/b)
{
    document.write ("El resultado es:"+a/b+"")
}
}



function tablamultiplicar(){
    var a = parseInt(document.form3.a1.value);
    while (a<1 || a>10);
        for (var i=1; i<=10; i++)
        {
            document.write ("    "+a+"x"+i+"="+a*i+"<br>");
        }
var capa_result=document.getElementById("resultado");
capa_result.innerHTML= a;
}



function CantidadDigitosNaturales(){
    var a = parseInt(document.form4.a1.value);
    if(a>0 & a<10)//posible respuesta
            {
                document.write ("El número tiene un digito:1");//print resultado
            }
            else if(a>9 & a<100)//posible respuesta
            {
                document.write ("El número tiene dos digitos:2");
            }
            else if(a>99 & a<1000)//rango de resultado
            {
                document.write ("El número tiene tres digitos:3");
            }
            else if(a>999 & a<10000)
            {
                document.write ("El número tiene cuatro digitos:4");
            }
            else if(a>9999 & a<100000)
            {
                document.write ("El número tiene cinco digitos:5");
            }
            else if(a>99999 & a<1000000)
            {
                document.write ("El número tiene seis digitos:6");
            }
            else if(a>999999 & a<10000000)
            {
                document.write ("El número tiene seis digitos:7");
            }
            else if(a>9999999 & a<100000000)
            {
                document.write ("El número tiene seis digitos:8");
            }
            else if(a>99999999 & a<1000000000)
            {
                document.write ("El número tiene seis digitos:9");
            }
}




function mayormenor4(){
    var a = parseInt(document.form5.a1.value);
    var b = parseInt(document.form5.b2.value);
    var c = parseInt(document.form5.c3.value);
    var d = parseInt(document.form5.d4.value);
    if(a<b & a<c & a<b & a<d & b<d & c<d)
            {   
                document.write ("El número menor es: "+a+"<br>");
                document.write ("El número mayor es: "+d+"<br>");
            }
            else if(a<c & a<d & a<b & c<d & c<b & d<b)
        
            {
                document.write ("El número menor es: "+a+"<br>");
                document.write ("El número mayor es: "+b+"<br>");
            }
            else if(a<d & a<b & a<c & d<b & d<c & b<c) 
        
            {
                document.write ("El número menor es: "+a+"<br>");
                document.write ("El número mayor es: "+c+"<br>");
            }
            else if(b<c & b<d & b<a & c<d & c<a & d<a)
        
            {
                document.write ("l número menor es: "+b+"<br>");
                document.write ("El número mayor es: "+a+"<br>");
            }
            else if(b<d & b<a & b<c & d<a & d<c & a<c) 
        
            {
                document.write ("El número menor es: "+b+"<br>");
                document.write ("El número mayor es: "+c+"<br>");
            }
            else if(b<a & b<c & b<d & a<c & a<d & c<d)
        
            {
                document.write ("El número menor es: "+b+"<br>");
                document.write ("El número mayor es: "+d+"<br>");
            }
            else if(c<d & c<a & c<b & d<a & b<d & a<b)
        
            {
                document.write ("El número menor es: "+c+"<br>");
                document.write ("El número mayor es: "+b+"<br>");
            }
            else if(c<a & c<b & c<d & a<b & a<d & b<d)
        
            {
                document.write ("El número menor es: "+c+"<br>");
                document.write ("El número mayor es: "+d+"<br>");
            }
            else if(c<b & c<d & c<a & b<d & b<a & d<a)
        
            {
                document.write ("El número menor es: "+c+"<br>");
                document.write ("El número mayor es: "+a+"<br>");
            }
            else if(d<a & d<b & d<c & a<b & a<c & b<c)  
        
            {
                document.write ("El número menor es: "+d+"<br>");
                document.write ("El número mayor es: "+c+"<br>");
            }
            else if(d<b & d<c & d<a & b<c & b<a & c<a)
            {
                document.write ("El número menor es: "+d+"<br>");
                document.write ("El número mayor es: "+a+"<br>");
            }
            else if(d<c & d<a & d<b & c<a & c<b & a<b)
            {
                document.write ("El número menor es: "+d+"<br>");
                document.write ("El número mayor es: "+b+"<br>");
            }
            else if(d<c & d<a & d<b & c<a & c<b & a<b)
            {
                document.write ("El número menor es: "+d+"<br>");
                document.write ("El número mayor es: "+b+"<br>");
            }
}