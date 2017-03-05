# binaryconverts
Aplicação para conversão de números binários - Converter binary numbers

--Nodejs npm
--Gulp
--Typescript
--Sass
--Browser-sync

Desenvolvido utilizando **gulp** como automatizador para conversão do **typescript** em **js**, **sass** em **css** e 
**browser-sync** para sincronizar em tempo real as alterações feitas, o objetivo foi montar uma aplicação simples utilizando 
esses recursos e demonstrar como podem ajudar no dia a dia do desenvolvedor front-end.

Developed with gulp js as task automation for typescript and sass dependencies and browser-sync to in real time synchronize 
the changes with all browsers where the project was opened.

O arquivo **configs.txt** contém um passo a passo de como instalar as dependências necessárias presumindo que o **nodejs** e **npm**
já estejam corretamente instalados e configurados.

The file **configs.txt** has the steps to configure the environment required to run the project, considering that nodejs and npm
are already configured and running normally.

No arquivo gulpfile.js estão as configurações de compilação do typescript e sass, também do reload do browser-sync.

The gulpfile.js is the file which gulp will initialize the project and execute the tasks. Execute the command *gulp watch*
to start.

##Inicializando o projeto
1. Usando o terminal do nodejs entre no diretório principal do projeto
2. Siga as instruções do arquivo **configs.txt**
3. Execute o comando *gulp watch* para iniciar a tarefa *task watch* configurada no *gulpfile.js*, se tudo funcionar corretamente
o browser padrão irá abrir com o index.html carregado, faça alguma alteração no *style.scss* ou *binario.ts* e salve para ver o 
funcionamento do browser-sync.
