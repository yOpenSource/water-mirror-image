var name = document.getElementById("input").value

//name = "my name is yogesh"
output = ""

for(var i=0;i < name.length; i++){
        switch(name[i]){
			case 'a':
						output+=("\u0250");
						break;
			case 'b':
						output+=("q");
						break;
			case 'c':
						output+=("\u0254");
						break;
			case 'd':
						output+=("p");
						break;
			case 'e':
						output+=("\u01DD");
						break;
			case 'f':
						output+=("\u025F");
						break;
			case 'g':
						output+=("\u0183");
						break;
			case 'h':
						output+=("\u0265");
						break;
			case 'i':
						output+=("\u1D09");
						break;
			case 'j':
						output+=("\u027E");
						break;
			case 'k':
						output+=("\u029E");
						break;
			case 'l':
						output+=("l");
						break;
			case 'm':
						output+=("\u026F");
						break;
			case 'n':
						output+=("u");
						break;
			case 'o':
						output+=("o");
						break;
			case 'p':
						output+=("d");
						break;
			case 'q':
						output+=("b");
						break;
			case 'r':
						output+=("\u0279");
						break;
			case 's':
						output+=("s");
						break;
			case 't':
						output+=("\u0287");
						break;
			case 'u':
						output+=("n");
						break;
			case 'v':
						output+=("\u028C");
						break;
			case 'w':
						output+=("\u028D");
						break;
			case 'x':
						output+=("x");
						break;
			case 'y':
						output+=("\u028E");
						break;
			case 'z':
						output+=("z");
						break;
			case ' ':
						output+=(" ");
						break;
			default:
						break;
	}   

}
document.getElementById("output").innerHTML = output
