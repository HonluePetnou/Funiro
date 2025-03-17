#!/bin/bash

# Vérifier si un message de commit est fourni
if [ -z "$1" ]; then
    echo "Veuillez fournir un message de commit."
    exit 1
fi

# Ajouter tous les fichiers
git add .

# Faire le commit avec le message fourni
git commit -m "$1"

# Récupérer la branche actuelle et pousser
git push origin $(git branch --show-current)

echo "✅ Modifications poussées avec succès !"
