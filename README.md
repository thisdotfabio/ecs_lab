# ECS Fargate con integración CI/CD

## Descripción

Este repo contiene un sitio web listo para ejecutar en un container docker (ECS), además de integrar CI/CD mediante los servicios CodePipeline, CodeBuild y Cloudformation.

## Ejecución

### 1. Carga de template CI/CD

Dado que CodeDeploy requiere de un Cluster y Servicios ECS ya existentes no es posible lanzar toda la solución en una única plantilla de Cloudformation, por lo que como primer paso se deberá crear un stack con el template `cicd-cfn-template.yml`

** Observaciones: El template requiere como parámetros el nombre del repo en codecommit y la rama en la que se escucharán los cambios, si el repo se encuentra en otro servicio cono Github, es necesario modificar el template en el Action Source del recurso CodePipelineProject ingresando los parámetros y configuraciones correspondientes, según la [documentación de AWS](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers)
