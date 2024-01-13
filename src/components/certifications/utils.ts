export const files = [
    {path:"src/assets/certificates/diploma-visualizacion-datos.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-terminal.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-storage-aws.pdf",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-redshift-big-data.pdf",tag:"Data Science"}, 
    {path:"src/assets/certificates/diploma-redes-neuronales.pdf",tag:"Machine Learning"}, 
    {path:"src/assets/certificates/diploma-python.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-python-pip.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-python-funciones.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-postgresql.pdf",tag:"Data Science"}, 
    {path:"src/assets/certificates/diploma-postgresql-datos.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-pandas-numpy.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-notacion-matematica.pdf",tag:"Mathematics"}, 
    {path:"src/assets/certificates/diploma-negocios-data-science.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-matplotlib-seaborn.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-linux.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-jupyter-notebook.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-javascript-clean-code.pdf",tag:"Programming"}, 
    {path:"src/assets/certificates/diploma-intro-nube.pdf",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-ia-data-ml.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-git-github.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-fundamentos-matematicas.pdf",tag:"Mathematics"},
    {path:"src/assets/certificates/diploma-funciones-matematicas.pdf",tag:"Mathematics"},
    {path:"src/assets/certificates/diploma-excel-intro.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-excel-basico.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-etica-ia.pdf",tag:"Machine Learning"}, 
    {path:"src/assets/certificates/diploma-db-aws.pdf",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-aws-redes.pdf",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-aws-iam.pdf",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-aws-fundamentos.pdf",tag:"Amazon Aws"},
    {path:"src/assets/certificates/diploma-aws-ec2.pdf",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-aws-computo.pdf",tag:"Amazon Aws"}, 
    {path:"src/assets/certificates/diploma-arquitecturas-limpias.pdf",tag:"Programming"},
    {path:"src/assets/certificates/diploma-aprender-data-ia.pdf",tag:"Data Science"},
    {path:"src/assets/certificates/diploma-algebra.pdf",tag:"Mathematics"},
    {path:"src/assets/certificates/diploma-ai.pdf",tag:"Amazon Aws"},
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