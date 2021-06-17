import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Container, Hidden } from '@material-ui/core'
import GradientButton from 'react-linear-gradient-button';
import Card from '../../../components/pages/Cards'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    centralizar: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    ilustracaoBanner: {
        backgroundImage: 'url(./img/Statistics.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '400px',

    },
    banner: {
        backgroundImage: 'url(https://1gzigc2wpsxy2gfa3t38i362-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/blink-texture-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '600px',
    },
    banner2: {
        backgroundColor: '#000C66',
        minHeight: '600px',
    },
    textoBanner: {
        fontSize: '4em',
        fontWeight: '600',
        lineHeight: '1.2',
        color: 'white',
    },
    botaoSignUp: {
        backgroundColor: 'black',

    },
    paper: {
        padding: '20px',
    },
    iconeGrande: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    apresentacao: {
        paddingTop: '70px',
        paddingBottom: '70px',

    },
    ilustracoes: {
        maxHeight: '350px',
        width: 'auto',
        borderRadius: '120px 20px 120px 20px'
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Inicio do MENU */}
            <AppBar position="static" elevation={0} color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Adbit logo
                        </Typography>
                        <Button color="inherit" href='/sign-in'>Login</Button>
                        <Button color="inherit" href='/sign-up'>Registrar</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* Fim do MENU */}
            {/* Inicio BANNER */}
            <div className={classes.banner}>
                <Container style={{ paddingTop: '130px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6}>
                            <h1 className={classes.textoBanner}>
                                Encurte <br />
                                Compartilhe <br />
                                Monitore
                            </h1>
                            <a href="/sign-up">
                                <GradientButton
                                    padding='15'
                                    theme="Amethyst"
                                >
                                    Criar conta Gratuitamente
                                </GradientButton>
                            </a>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.ilustracaoBanner} />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </div>
            {/* Fim BANNER */}
            {/* inicio APRESENTACAO */}
            <Container className={classes.apresentacao}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            titulo="Links seguros"
                            conteudo="Todas as suas URLs encurtadas são criptografas por padrão,
                        tornandos as mais seguras através de certificados de segurança (HTTPS)
                        consolidados no mercado."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            titulo="Estatísticas"
                            conteudo="Veja o total de cliques da sua url. Monitore seus links acompanhe 
                            as estatísticas para seus negócios e projetos saiba a quantidade de acessos 
                            da sua URL através do nosso poderoso painel totalmente em português e fácil de usar."
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Card
                            titulo="Confiável"
                            conteudo="Somos um serviço de encurtamento de links que utiliza otimas tecnologias
                            para oferecer um serviço de qualidade"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Card
                            titulo="Feito para simplificar"
                            conteudo="Tendo como objetivo principal encurtar links, nós focamos na melhor 
                            experiência possível para que você consiga encurtá-los da maneira mais simples 
                            e rápida possível."
                        />
                    </Grid>
                </Grid>
            </Container>
            {/* fim APRESENTACAO */}

            <div className={classes.banner2}>
                <Container>
                    <Grid container spacing={0} style={{ paddingTop: '130px' }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.centralizar}>
                                <img src="./img/desenho1.png" alt="ilustracao 1" className={classes.ilustracoes} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <h1 className={classes.textoBanner}>
                                Pare de perder tempo com encurtadores de URL genéricos
                                </h1>
                            <a href="/sign-up">
                                <GradientButton
                                    padding='15'
                                    theme="Amethyst"
                                >
                                    Criar conta Gratuitamente
                                </GradientButton>
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        </div>
    )
};