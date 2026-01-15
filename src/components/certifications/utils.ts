export const files = [
    {path:"/certificates/diploma-visualizacion-datos.png",tag:"Data Science"},
    {path:"/certificates/diploma-terminal.png",tag:"Programming"},
    {path:"/certificates/diploma-storage-aws.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-redshift-big-data.png",tag:"Data Science"},
    {path:"/certificates/diploma-redes-neuronales.png",tag:"Machine Learning"},
    {path:"/certificates/diploma-python.png",tag:"Programming"},
    {path:"/certificates/diploma-python-pip.png",tag:"Programming"},
    {path:"/certificates/diploma-python-funciones.png",tag:"Programming"},
    {path:"/certificates/diploma-postgresql.png",tag:"Data Science"},
    {path:"/certificates/diploma-postgresql-datos.png",tag:"Data Science"},
    {path:"/certificates/diploma-pandas-numpy.png",tag:"Data Science"},
    {path:"/certificates/diploma-notacion-matematica.png",tag:"Mathematics"},
    {path:"/certificates/diploma-negocios-data-science.png",tag:"Data Science"},
    {path:"/certificates/diploma-matplotlib-seaborn.png",tag:"Data Science"},
    {path:"/certificates/diploma-linux.png",tag:"Programming"},
    {path:"/certificates/diploma-jupyter-notebook.png",tag:"Programming"},
    {path:"/certificates/diploma-javascript-clean-code.png",tag:"Programming"},
    {path:"/certificates/diploma-intro-nube.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-ia-data-ml.png",tag:"Data Science"},
    {path:"/certificates/diploma-git-github.png",tag:"Programming"},
    {path:"/certificates/diploma-fundamentos-matematicas.png",tag:"Mathematics"},
    {path:"/certificates/diploma-funciones-matematicas.png",tag:"Mathematics"},
    {path:"/certificates/diploma-excel-intro.png",tag:"Data Science"},
    {path:"/certificates/diploma-excel-basico.png",tag:"Data Science"},
    {path:"/certificates/diploma-etica-ia.png",tag:"Machine Learning"},
    {path:"/certificates/diploma-db-aws.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-aws-redes.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-aws-iam.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-aws-fundamentos.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-aws-ec2.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-aws-computo.png",tag:"Amazon Aws"},
    {path:"/certificates/diploma-arquitecturas-limpias.png",tag:"Programming"},
    {path:"/certificates/diploma-aprender-data-ia.png",tag:"Data Science"},
    {path:"/certificates/diploma-algebra.png",tag:"Mathematics"},
    {path:"/certificates/diploma-ai.png",tag:"Amazon Aws"},
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