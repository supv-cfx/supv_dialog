## supv_dialog
First script to test ChakraUI with React on TypeScript for supv_core

:fr:

# Télécharger code source ou la release

__Release :__
- Regardez a droite sur github vous pouvez voir la section *release*, télécharger le .zip directement ici avoir juste a ensure la ressource dans votre .cfg

__Source Code :__
- Si vous voulez télécharger le code source vous aurez besoin de le build (requis: NodeJs > 17.0.0)
- Allez dans le dossier web de la ressource, et ouvrez votre cmd a partir d'ici (il faut que dans votre cmd l'adresse de commande soi .../supv_dialog/web)
- Ensuite vous pouvez installer les modules via nodejs en tapant dans votre cmd : ``npm i``
- Vous pouvez à présent éditer le code de l'interface, pour le rendu final pour le jeu vous devrez taper dans votre cmd : ``npm run build``
- Fini

# Comment l'utiliser?

- Utiliser l'export ainsi dans n'importe quelle de vos ressources
```lua
---CreateInteractDialog
---@param title string
---@param desrcription string
---@return boolean
local dialog = exports.supv_dialog:CreateInteractDialog('My title here', 'My description here')
if dialog then
    print('success', dialog)
else
    print('failed', dialog)
end
```

:uk:

# Download source-code or release?

__Release :__
- Look right of github and *release* download .zip for script is ready with ensure only in your server.cfg 

__Source Code :__
- If you want doawnload source code you need to build ui yourself (required: NodeJS > 17.0.0)
- Go in web folder of this resource and open cmd here (for your path is ...supv_dialog/web)
- Write in your cmd when path is okay : ``npm i``
- You can edit code, now for build it write in cmd : ``npm run build``
- Finish

# How to use?

- Use this export like it :
```lua
---CreateInteractDialog
---@param title string
---@param desrcription string
---@return boolean
local dialog = exports.supv_dialog:CreateInteractDialog('My title here', 'My description here')
if dialog then
    print('success', dialog)
else
    print('failed', dialog)
end
```
