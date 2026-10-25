# momikid_landingpage

Landing page do app [momikid](../momikid), em React + Vite + Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

Estrutura: `src/App.jsx` (a página), `src/App.css`, `src/shared/` (marca, botões das lojas, tela do celular, rodapé, animações).

## Deploy no Coolify

1. Novo recurso → repositório Git → **Build Pack: Dockerfile**.
2. **Ports Exposes: `8080`**.
3. Defina o domínio e faça o deploy. O Coolify usa o `HEALTHCHECK` (`/healthz`).

O Dockerfile compila o React e serve o `dist/` com nginx sem root (`nginx.conf`: gzip, cache de assets, cabeçalhos de segurança).

## Antes de publicar

- Links das lojas em `src/shared/Stores.jsx`: Google Play (`com.momikid.app`, confirme o pacote) e App Store (`id0000000000` é marcador; use o ID real).
- Links de Privacidade e Termos em `src/shared/Footer.jsx`.
- Revise as respostas das perguntas frequentes em `src/App.jsx`.

`exemplos/` guarda as primeiras direções em HTML estático, só para referência; não entra na imagem.

## Política de Privacidade, Termos de Uso e exclusão da conta

Endereços fixos, para informar nas lojas: `/privacidade`, `/termos` e `/excluir-conta` (instruções de exclusão da conta e dos dados, pedidas pelo Google Play e pela Meta no login com Facebook; em inglês `/en/delete-account`, em espanhol `/es/eliminar-cuenta`) (`?lang=en` ou `?lang=es` força o idioma). Os textos estão em `src/legalContent.js`, nos três idiomas, e **são um rascunho**: tudo que aparece em amarelo na página (`{{...}}` no código) precisa ser preenchido e o texto revisado por um advogado. Depois disso, troque `LEGAL_DRAFT` para `false` nesse arquivo para tirar o aviso de rascunho.

## Fotos de famílias

Coloque as fotos em `src/assets/fotos` (veja o `LEIA-ME.md` da pasta). Elas entram sozinhas na seção "Gente de verdade".
