# Painel de conteúdo

Acesse `/admin/` no endereço do site após a publicação.

## Primeiro acesso

1. No painel Netlify do projeto, abra **Identity**.
2. Use **Invite users** para convidar seu próprio e-mail.
3. Abra os detalhes dessa conta e adicione o papel **admin** em **Roles**.
4. Abra o convite recebido, defina uma senha e entre em `/admin/`.

Convites e recuperação de senha que chegam à página inicial são encaminhados ao painel. Não há cadastro de administradores pelo site. Um usuário sem o papel `admin` não pode publicar conteúdo nem enviar imagens.

## Edição

As abas permitem editar os títulos das seções, o rodapé, lançamentos, destaques e gravadoras da página inicial. É possível adicionar, remover e reordenar itens, informar links e substituir imagens por URL ou upload de PNG, JPG, GIF e WebP de até 3 MB. Use **Ver prévia** antes de **Publicar alterações**. A publicação atualiza o conteúdo sem precisar editar arquivos ou iniciar outra publicação do site.

As alterações não publicadas ficam apenas na aba aberta. O navegador avisa antes de sair. Se outra pessoa publicar primeiro, o painel recusa a sobrescrita e solicita recarregamento; copie suas alterações antes de recarregar.

Este painel não altera o catálogo Metacritic nem as páginas individuais dos artistas. O conteúdo original da página inicial é usado antes da primeira edição e como alternativa caso o serviço de conteúdo esteja indisponível.

## Armazenamento e verificação

Os conteúdos publicados ficam no Netlify Database. As imagens enviadas ficam no Netlify Blobs. A migração gerada em `netlify/database/migrations/` é aplicada pela plataforma na publicação. O arquivo `content/home-defaults.json` contém somente o conteúdo inicial importado, não as edições do painel.

O login usa `@netlify/identity` versão 2.0.0 carregado como módulo pelo esm.sh. A interface também utiliza fontes do Google Fonts; o painel informa falha de carregamento se não conseguir obter o módulo de autenticação.

Verificações locais:

```sh
node --experimental-strip-types --test tests/content.test.mts
node --check admin/panel.js
node --check js/home-content.js
npx tsc --noEmit --module esnext --moduleResolution bundler --target es2022 --types node --resolveJsonModule --esModuleInterop --skipLibCheck netlify/functions/content.mts netlify/functions/media.mts
```

O fluxo completo de login, publicação e upload exige o ambiente Netlify e uma conta convidada com papel `admin`.
