## Como executar

1. Abra o terminal dentro da pasta do projeto:

```powershell
cd "C:\Users\joaoh\OneDrive\Área de Trabalho\Nova pasta (4)"
```

2. Instale as dependências com `npm install`
3. Inicie a API mock com `npm run mock`
4. Em outro terminal, inicie a aplicação com `npm run dev`

Se o comando `npm install` for executado em `C:\Users\joaoh`, o npm não encontrará o arquivo `package.json` e exibirá erro `ENOENT`. O comando precisa ser rodado na pasta onde está este repositório.

Se você estiver usando PowerShell e aparecer o erro de bloqueio do `npm.ps1`, rode o comando pelo executável direto:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' install
```

Para iniciar os scripts da mesma forma:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run mock
& 'C:\Program Files\nodejs\npm.cmd' run dev
```
