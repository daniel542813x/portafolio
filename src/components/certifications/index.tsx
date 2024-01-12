const files = [
    {path:"../../assets/certificates/diploma-visualizacion-datos.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-terminal.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-storage-aws.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-redshift-big-data.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-redes-neuronales.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-python.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-python-pip.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-python-funciones.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-postgresql.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-postgresql-datos.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-pandas-numpy.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-notacion-matematica.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-negocios-data-science.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-matplotlib-seaborn.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-linux.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-jupyter-notebook.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-javascript-clean-code.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-intro-nube.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-ia-data-ml.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-git-github.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-fundamentos-matematicas.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-funciones-matematicas.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-excel-intro.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-excel-basico.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-etica-ia.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-db-aws.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-aws-redes.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-aws-iam.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-aws-fundamentos.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-aws-ec2.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-aws-computo.pdf",tag:"Aws"}, 
    {path:"../../assets/certificates/diploma-arquitecturas-limpias.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-aprender-data-ia.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-algebra.pdf",tag:"Aws"},
    {path:"../../assets/certificates/diploma-ai.pdf",tag:"Aws"},
]
const Certifications = () => {

    return <>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <h1 style={{fontFamily:'Raleway',fontWeight:'bold',opacity:0.8}}>Certifications</h1>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',width:'100%'}}>
                {
                    files.map((file) => {
                        return <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:10}}>
                                <iframe src={'diploma-aprender-data-ia.pdf'} width={200} height={200} />
                            <p style={{fontFamily:'Raleway',fontWeight:'bold',opacity:0.8}}>{file.tag}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </>

};

export default Certifications;

