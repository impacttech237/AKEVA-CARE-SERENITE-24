# Déploie le site sur Cloudflare Workers.
#
# Pourquoi ce script : le bundler d'@opennextjs/cloudflare (esbuild) plante sur
# Windows quand le chemin du projet contient des espaces ou des accents (ex.
# "PROJET WEB", "Sérénité"). Ce script copie le projet dans un dossier temporaire
# au chemin simple (C:\akeva-deploy-build), construit et déploie depuis là.
#
# Usage : depuis la racine du projet, exécuter :
#   powershell -ExecutionPolicy Bypass -File scripts/deploy-windows.ps1

$ErrorActionPreference = "Stop"
$src = (Get-Location).Path
$dst = "C:\akeva-deploy-build"

Write-Host "Copie du projet vers $dst..."
if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
New-Item -ItemType Directory -Path $dst | Out-Null
robocopy $src $dst /MIR /XD ".git" ".next" ".open-next" ".wrangler" /NFL /NDL /NJH /NJS /NC /NS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "Échec de la copie (robocopy exit=$LASTEXITCODE)" }

Write-Host "Build + déploiement depuis $dst..."
Push-Location $dst
try {
    npx opennextjs-cloudflare build
    if ($LASTEXITCODE -ne 0) { throw "Échec du build OpenNext" }
    npx wrangler deploy
} finally {
    Pop-Location
}

Write-Host "Terminé."
