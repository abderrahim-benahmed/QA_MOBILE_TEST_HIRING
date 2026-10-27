\# Analyse des tests E2E



\## Exécution initiale



J’ai commencé par lancer l’ensemble de la suite afin d’avoir un état de départ avant de faire des modifications.



Résultat :



\- 9 scénarios exécutés

\- 6 passés

\- 3 en échec

\- 32 étapes exécutées

\- 29 passées

\- 3 en échec



J’ai ensuite repris les trois scénarios en échec un par un pour identifier si le problème venait de l’application ou du test.



\## Scénarios en échec



\### Message affiché après la connexion



Le test attendait `Welcome to the secure area!` alors que l’application affiche `You logged into a secure area!`.



Après vérification dans l’application, le comportement était correct. C’était donc l’attendu du test qui n’était plus bon. Je l’ai mis à jour.



\### Mauvais mot de passe dans le scénario



Un autre scénario essayait de se connecter avec `Summer2024!` tout en attendant une connexion réussie.



Le mot de passe valide défini pour l’application est `SuperSecretPassword!`. J’ai donc corrigé la donnée utilisée par le scénario.



\### Mauvais identifiant sur la Secure Area



Le dernier scénario en échec recherchait `secure-area-title`, mais cet identifiant n’existe pas dans l’écran.



Le titre utilise `secure-area-heading`, déjà utilisé ailleurs dans les tests. J’ai corrigé le scénario pour utiliser le bon identifiant.



\## Revue de la suite



Une fois les trois erreurs corrigées, j’ai parcouru le reste des tests pour voir s’il y avait des points pouvant rendre la suite instable ou masquer des erreurs.



J’ai notamment trouvé une assertion placée dans un `try/catch`. Si l’assertion échouait, l’erreur était simplement ignorée et le scénario restait vert. J’ai supprimé ce `try/catch` pour que le test échoue réellement en cas de problème.



Il y avait aussi une attente fixe de 3 secondes lors de l’arrivée sur la Secure Area. Je l’ai remplacée par une attente sur l’affichage du titre de la page. Le test continue donc dès que l’écran est prêt au lieu d’attendre systématiquement 3 secondes.



La synchronisation Detox était désactivée pour tous les scénarios. Je l’ai réactivée afin de laisser Detox gérer la synchronisation avec l’application plutôt que de dépendre d’attentes manuelles.



J’ai également réutilisé les identifiants de connexion déjà centralisés dans les données de test, corrigé une colonne `message` inutilisée dans un `Scenario Outline` et remplacé des steps trop techniques basés directement sur les `testID` par les steps métier déjà disponibles.



Enfin, un scénario vérifiait uniquement la présence du titre de la Secure Area alors que cette vérification était déjà couverte par un autre scénario. Je l’ai supprimé pour éviter de rejouer inutilement le même contrôle.



\## Résultat final



Après les modifications, j’ai relancé la suite complète :



\- 8 scénarios exécutés

\- 8 passés

\- 30 étapes exécutées

\- 30 passées

\- 0 échec



La suite est donc verte après les corrections et le nettoyage des principaux points relevés.

