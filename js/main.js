var meses=new Array();
var dias=new Array();
var ciudades=new Array();
var offset=new Array();
offset=[+2,0,+1,0,+2,-4,-5,-5,-4,+9]
ciudades=['Belgrado', 'Reykjavik', 'Dublín', 'Ittooqortoormiit','Zurich', 'Sucre', 'México DF.', 'Lima', 'Caracas', 'Tokio']
meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
dias=['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
function fechaActual(){
	var date=new Date($.now());
	var mes=meses[date.getMonth()];
	var dia=dias[date.getDay()-1];
	var numero=date.getDate();
	document.getElementById('fecha').innerHTML=dia+", "+numero+' de '+mes;
}
function visualizar(){
	document.getElementById('displayOver').setAttribute('style',"visibility:visible;");
}
function esconder(){
	document.getElementById('displayOver').setAttribute('style',"visibility:hidden;");
}