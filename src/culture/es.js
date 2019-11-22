(function (translator) {
	translator.translations["es"] = {
		// javascript alerts or messages
		"testneteditionactivated": "Testnet activado",
		"paperlabelbitcoinaddress": "Dirección Rutanio:",
		"paperlabelprivatekey": "Llave privada:",
		"paperlabelencryptedkey": "Llave privada cifrada (contraseña necesaria)",
		"bulkgeneratingaddresses": "Generación de direcciones... ",
		"brainalertpassphrasetooshort": "La contraseña introducida es demasiado corta.\n\n",
		"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus RUTAs.",
		"brainalertpassphrasedoesnotmatch": "Las contraseñas no coinciden.",
		"detailalertnotvalidprivatekey": "El texto que has introducido no es una Llave privada válida",
		"detailconfirmsha256": "El texto que has introducido no es una Llave privada válida\n\n¿Quieres usar ese texto como si fuera una contraseña y generar una Llave privada usando un hash SHA256 de tal contraseña?\n\nAviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus RUTAs.",
		"bip38alertincorrectpassphrase": "La frase-segura para esta contraseña es incorrecta.", //TODO: please translate
		"bip38alertpassphraserequired": "Se requiere una frase-segura para llavesBIP38", //TODO: please translate
		"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar llaves.",
		"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La Llave pública de ambos coincidan entradas. Debe introducir dos llavesdiferentes.",
		"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos llavespúblicas. Seleccione 'Añadir' para agregar dos llavespúblicas para obtener una dirección Rutanio.",
		"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos llavesprivadas",
		"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La Llave privada de ambos coincidan entradas. Debe introducir dos llavesdiferentes.",

		// header and menu html
		"tagline": "Generador de billeteras Rutanio de código abierto en lado de cliente con Javascript",
		"generatelabelbitcoinaddress": "Generando dirección Rutanio...",
		"generatelabelmovemouse": "Mueve un poco el ratón para crear entropía...",
		"generatelabelkeypress": "O ingresa varios caracteres aleatorios en este cuadro de texto", //TODO: please translate
		"singlewallet": "Una sola Billetera",
		"paperwallet": "Billetera en papel",
		"bulkwallet": "Direcciones en masa",
		"brainwallet": "Billetera mental",
		"vanitywallet": "Billetera personalizada",
		"splitwallet": "Dividir billetera", //TODO: please translate
		"detailwallet": "Detalles de la Billetera",

		// footer html
		"footerlabeldonations": "Donaciones:",
		"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Histórico de versiones",
		"footerlabelgithub": "Repositorio GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.",
		"footerlabelnowarranty": "Sin garantía.",

		// status html
		"statuslabelcryptogood": "&#10004; Bueno!", //TODO: please translate
		"statuslabelcryptogood1": "Su navegador puede generar criptograficamente multiples llaves usando window.crypto.getRandomValues", //TODO: please translate
		"statusokcryptogood": "OK", //TODO: please translate
		"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
		"statuslabelcryptobad1": "Su navegador no soporta window.crypto.getRandomValues. Usted debe usar un navegador moderno con esta aplicación para mejorar la seguridad de las llavesgeneradas.",
		"statusokcryptobad": "OK", //TODO: please translate
		"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
		"statuslabelunittestsgood1": " Todas las pruebas unitarias han terminado sastisfactoriamente.", //TODO: please translate
		"statusokunittestsgood": "OK", //TODO: please translate
		"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
		"statuslabelunittestsbad1": "Algunas pruebas unitarias no terminaron satisfactoriamente.", //TODO: please translate
		"statusokunittestsbad": "OK", //TODO: please translate
		"statuslabelprotocolgood": "&#10004; Bueno!", //TODO: please translate
		"statuslabelprotocolgood1": "Ustes esta usando este aplicacion desde su entorno local. <br />Consejo: Asegurate de estar desconectado de internet. ", //TODO: please translate
		"statusokprotocolgood": "OK", //TODO: please translate
		"statuslabelprotocolbad": "&#9888; Piensa doble!", //TODO: please translate
		"statuslabelprotocolbad1": "Al parecer usted esta intentando usar esta aplicacion desde un sitio remoto. Para direcciones valiosas se recomienda", //TODO: please translate
		"statuslabelprotocolbad2": "Descargar", //TODO: please translate
		"statuslabelprotocolbad3": "el archivo zip file desde GitHub and ejecutar sin conexión el archivo html.", //TODO: please translate
		"statusokprotocolbad": "OK", //TODO: please translate
		"statuslabelkeypool1": "Este es un hitorial de todas las direcciones generadas durante la sesión actual.", //TODO: please translate
		"statuskeypoolrefresh": "Actualizar", //TODO: please translate
		"statusokkeypool": "OK", //TODO: please translate

		// single wallet html
		"newaddress": "Generar dirección",
		"singleprint": "Imprimir",
		"singlelabelbitcoinaddress": "Dirección Rutanio",
		"singlelabelprivatekey": "Llave privada (formato para importar):",
		"singletip1": "<b>Una billetera de Rutanio</b> es un simple emparejamiento de una dirección Rutanio con su correspondiente llave privada de Rutanio. Esta billetera se ha generado en su navegador y se muestra arriba", //TODO: please translate
		"singletip2": "<b>Para mantener esta billetera segura</b> usted debe imprimir o guardar una copia de su dirección pública y su llave privada. Es importante hacer una copia de seguridad de su llave privada y mantenerla en un lugar seguro. Este sitio no tiene conocimiento de su llave privada. Si usted esta familiarizado con PGP usted puede descargar esta pagina en HTML y verificar la autenticidad de la versión desde el sitio del autor comparando el hash SHA256 con el SHA256 disponible en la historia de versiones señalado al final de este documento. Si usted abandona/refresca este sitio o pulsa el botón Generar una nueva dirección, una nueva llave privada sera asignada y la anterior no podrá ser recuperada. Si usted comparte la llave privada dará acceso para gastarse los RUTAs asociados a esta dirección. Si usted tiene una copia fisica de su billetera mantengala segura y alejada del agua. Cuide su billetera como billetes corrientes.", //TODO: please translate
		"singletip3": "<b>Agregue fondos</b> a su billetera indicando a otros enviar RUTAs a su dirección pública.", //TODO: please translate
		"singletip4": "", //TODO: please translate
		"singletip5": "<b>Gaste sus RUTAs</b> importando la llave pública en su billetera P2P. Tenga en cuenta que cuando importe su llave privada y gaste fondos, su llave se incluirá con otras llaves privadas en su billetera P2P. Cuando realice una transacción, su balance restante será enviado a otra direccion de Rutanio dentro de su billetera P2P. Luego debe hacer una copia de seguridad de su billetera y mantenerla segura ya que su balance restante se almacenará allí. Se aconseja que se debe eliminar una billetera. ", //TODO: please translate
		"singleshare": "SHARE", //TODO: please translate
		"singlesecret": "SECRET", //TODO: please translate

		// paper wallet html
		"paperlabelhideart": "Ocultar diseño",
		"paperlabeladdressesperpage": "Direcciones por página:",
		"paperlabeladdressestogenerate": "Direcciones en total:",
		"papergenerate": "Generar",
		"paperprint": "Imprimir",
		"paperlabelBIPpassphrase": "Frase-segura:", //TODO: please translate
		"paperlabelencrypt": "Encriptación BIP38 ?", //TODO: please translate

		// bulk wallet html
		"bulklabelstartindex": "Empezar en:",
		"bulklabelrowstogenerate": "Filas a generar:",
		"bulklabelcompressed": "Direcciones comprimidas?", //TODO: please translate
		"bulkgenerate": "Generar",
		"bulkprint": "Imprimir",
		"bulklabelcsv": "Valores separados por coma:",
		"bulklabelformat": "Índice,Dirección,Llave privada (formato para importar)",
		"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar Rutanio en mi web?",
		"bulka1": "La forma tradicional de aceptar RUTAs en tu web requiere tener instalado el cliente oficial de Rutanio (\"rutaniod\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las llavesprivadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de Rutanio y no las llaves privadas. De esta forma no te tienes que preocupar de que alguien robe la Billetera si se cuelan en el servidor.",
		"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar RUTAs en mi web?",
		"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
		"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la Billetera ni las llavespúblicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
		"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con Rutanio. Cuando el cliente elija pagar con RUTAs, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
		"bulklabela2li4": "Ahora te hace falta recibir una notificación del pago. Busca en google \"notificación de pagos Rutanio\" (o \"Rutanio payment notification\" en inglés) y suscríbete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vía Web services, API, SMS, email, etc. Una vez te llegue la notificación, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://www.blockexplorer.rutanio.com/address/DIRECCION<br /><br /> <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
		"bulklabela2li5": "Las transacciones que recibas se almacenarán de forma segura en la cadena de bloques. Usa la Billetera original que generaste en el paso 1 para usarlas.",

		// brain wallet html
		"brainlabelenterpassphrase": "Contraseña:",
		"brainlabelshow": "Mostrar",
		"brainprint": "Imprimir",
		"brainlabelconfirm": "Confirmar contraseña:",
		"brainview": "Ver",
		"brainalgorithm": "Algoritmo: SHA256(contraseña)",
		"brainlabelbitcoinaddress": "Dirección Rutanio:",
		"brainlabelprivatekey": "Llave privada (formato para importar):",

		// vanity wallet html
		"vanitylabelstep1": "Paso 1 - Genera tu par de Llaves",
		"vanitynewkeypair": "Generar",
		"vanitylabelstep1publickey": "Llave pública:",
		"vanitylabelstep1pubnotes": "Copia y pega la línea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
		"vanitylabelstep1privatekey": "Llave privada:",
		"vanitylabelstep1privnotes": "Copia y pega la Llave privada de arriba en un archivo de texto. Es mejor que lo almacenes en un volumen cifrado. Lo necesitarás para recuperar la Llave privada una vez Vanity Pool haya encontrado tu prefijo.",
		"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcula tu Billetera personalizada",
		"vanitylabelenteryourpart": "Introduce la Llave privada generada en el paso 1, y que has guardado:",
		"vanitylabelenteryourpoolpart": "Introduce la Llave privada obtenida de la Vanity Pool:",
		"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una Llave pública o Llave privada]",
		"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una Llave pública o Llave privada]",
		"vanitylabelradioadd": "Añadir",
		"vanitylabelradiomultiply": "Multiplicar",
		"vanitycalc": "Calcular Billetera personalizada",
		"vanitylabelbitcoinaddress": "Dirección Rutanio personalizada:",
		"vanitylabelnotesbitcoinaddress": "Esta es tu nueva dirección, que debería tener el prefijo deseado.",
		"vanitylabelpublickeyhex": "Llave pública personalizada (HEX):",
		"vanitylabelnotespublickeyhex": "Lo anterior es la Llave pública en formato hexadecimal.",
		"vanitylabelprivatekey": "Llave privada personalizada (formato para importar):",
		"vanitylabelnotesprivatekey": "Esto es la Llave privada para introducir en tu Billetera.",

		// detail wallet html
		"detaillabelenterprivatekey": "Introduce la Llave privada",
		"detailkeyformats": "Formatos: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Ver detalles",
		"detailprint": "Imprimir",
		"detaillabelnote1": "Tu Llave privada es un número secreto, único, que sólo tú conoces. Se puede expresar en varios formatos. Aquí abajo mostramos la dirección y la Llave pública que se corresponden con tu Llave privada, así como la Llave privada en los formatos más conocidos (para importar, hex, base64 y mini).",
		"detaillabelnote2": "Rutanio v0.6+ almacena las llavespúblicas comprimidas. El cliente también soporta importar/exportar llavesprivadas usando importprivkey/dumpprivkey. El formato de las llavesprivadas exportadas depende de si la dirección se generó en una Billetera antigua o nueva.",
		"detaillabelbitcoinaddress": "Dirección Rutanio:",
		"detaillabelbitcoinaddresscomp": "Dirección Rutanio (comprimida):",
		"detaillabelpublickey": "Llave pública (130 caracteres [0-9A-F]):",
		"detaillabelpublickeycomp": "Llave pública (comprimida, 66 caracteres [0-9A-F]):",
		"detaillabelprivwif": "Llave privada para importar (51 caracteres en base58, empieza con un",
		"detaillabelprivwifcomp": "Llave privada para importar (comprimida, 52 caracteres en base58, empieza con",
		"detailcompwifprefix": "'R'",
		"detaillabelprivhex": "Llave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
		"detaillabelprivb64": "Llave privada en base64 (44 caracteres):",
		"detaillabelprivmini": "Llave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
		"detaillabelpassphrase": "Frase-segura BIP38", //TODO: please translate
		"detailbip38decryptbutton": "Desencriptar BIP38", //TODO: please translate
		"detailbip38encryptbutton": "Encriptar BIP38", //TODO: please translate
		"detaillabelq1": "Como hacer una llave usando un dado? Qué es B6?", //TODO: please translate
		"detaila1": "Una aspecto importante al generar direcciones de Rutanio es asegurarse de que los números aleatorios utilizados sean realmente aleatorios. La aleatoriedad física es mejor que la seudoaleatoriedad generada por computadora.  La forma más fácil de generar aleatoriedad física es con dados. Para crear una llave privada Rutanio solo necesita un dado de seis lados que tira 99 veces. Parar cada vez para registrar el valor del dado. Al registrar los valores, siga estas reglas: 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5, 6 = 0. Al hacer esto, está grabando el gran número aleatorio, su Llave privada, en formato B6 o base 6. Luego puede ingresar la Llave privada de 99 caracteres base 6 en el campo de texto de arriba y hacer clic en Ver detalles. Luego verá la dirección de Rutanio asociada con su Llave privada. También debe tomar nota de su Llave privada en formato WIF, ya que es más utilizada.   An important part of creating a Rutanio wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Rutanio private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Rutanio address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
	};
})(ninja.translator);
