//APAGAR MODELS/ASSOCIATIONS.JS
//ALTERAR O BD PARA SE CONECTAR COM O MYSQL
//ALTERAR OS MODELOS DAS ENTIDADES
//ALTERAR OS CONTROLLERS PARA REALIZAR AS OPERACOES




// Carregando módulos
const express = require ('express')
const servidor = express()
const handlebars = require ('express-handlebars')
const bodyParser = require ('body-parser')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
//const Associacoes = require('./models/Associations')
const reprodutor = require('./models/Reprodutor')
//const passport = require('passport')
//require ('./config/auth')(passport)

//exemplo: const ##Entidade##Route = require ('./routes/##Entidade##Route')
const ReprodutorRoute = require ('./routes/ReprodutorRoutes') 
//const InseminacaoRoute = require ('./routes/InseminacaoRoutes') 
//const PartoRoute = require ('./routes/PartoRoutes') 
//##REQROUTES##

//Configurações

    //Sessão
        servidor.use(session({
            secret: 'tonioeeu',
            resave: true,
            saveUninitialized: true
        }))

        //servidor.use(passport.initialize())
        //servidor.use(passport.session())

        servidor.use(flash())
        servidor.use((req, res, next)=>{
            res.locals.flashMessages = req.flash()
            next()
        })
    
	//Template Engine
        servidor.engine( 'hbs', handlebars({
                defaultLayout:'principal',
                extname:'.hbs'
        }) )

        servidor.set('view engine', 'hbs')

    //Body Parser
        servidor.use(bodyParser.urlencoded ({extended: true}))
        servidor.use(bodyParser.json())

    //Public
        servidor.use(express.static(path.join(__dirname,'public')))
        servidor.use(middleware)
   
    //Rotas
        servidor.use('/Reprodutor', ReprodutorRoute) 
		//servidor.use('/Inseminacao', InseminacaoRoutes) 
		//servidor.use('/Parto', PartoRoutes) 
		//##INSERIR_ROTAS##
    
    //Inicia Servidor
        servidor.listen(8081,iniciaServidor)

function iniciaServidor(){ 
    console.log("rodando...")
}

function middleware(req, res, next){
   res.locals.success_msg = req.flash('success_msg')
   res.locals.error_msg = req.flash('error_msg')
   res.locals.error = req.flash('error')
   res.locals.user  = req.user || null

   //console.log("###  mensagens de sucesso ou erro do MIDDLEWARE ###")
   next()
}