export const files = [
    {path:"src/assets/certificates/diploma-visualizacion-datos.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-terminal.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-storage-aws.png",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-redshift-big-data.png",tag:"Data Science"}, 
    {path:"src/assets/certificates/diploma-redes-neuronales.png",tag:"Machine Learning"}, 
    {path:"src/assets/certificates/diploma-python.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-python-pip.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-python-funciones.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-postgresql.png",tag:"Data Science"}, 
    {path:"src/assets/certificates/diploma-postgresql-datos.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-pandas-numpy.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-notacion-matematica.png",tag:"Mathematics"}, 
    {path:"src/assets/certificates/diploma-negocios-data-science.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-matplotlib-seaborn.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-linux.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-jupyter-notebook.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-javascript-clean-code.png",tag:"Programming"}, 
    {path:"src/assets/certificates/diploma-intro-nube.png",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-ia-data-ml.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-git-github.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-fundamentos-matematicas.png",tag:"Mathematics"},
    {path:"src/assets/certificates/diploma-funciones-matematicas.png",tag:"Mathematics"},
    {path:"src/assets/certificates/diploma-excel-intro.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-excel-basico.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-etica-ia.png",tag:"Machine Learning"}, 
    {path:"src/assets/certificates/diploma-db-aws.png",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-aws-redes.png",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-aws-iam.png",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-aws-fundamentos.png",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-aws-ec2.png",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-aws-computo.png",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-arquitecturas-limpias.png",tag:"Programming"},
    {path:"src/assets/certificates/diploma-aprender-data-ia.png",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-algebra.png",tag:"Mathematics"},
    {path:"src/assets/certificates/diploma-ai.png",tag:"Amazon Aws"},
]

export const getTags = () => {
    return [
        "Amazon Aws",
        "Data Science",
        "Programming",
        "Mathematics",
        "Machine Learning"
    ]
}

export const getCertificates = (tag:string) => {
    return files.filter((file) => file.tag === tag);
}

export const getFileName = (path:string) => {
    return path.split("/").pop()?.split(".")[0].replace(/-/g," ").toUpperCase();
}