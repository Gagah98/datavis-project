# 

## Où vous avez trouvé les données
Ces données ont été trouvées sur le site https://www.thecrag.com/. C'est un site collaboratif qui recense toutes les zones d'escalade dans le monde entier. Bien que le site soit collaboratif, il ne met pas à disposition en open-source sa base de données. J'ai envoyé un mail pour demande un accès, mais ils ne m'ont pas répondu. Avec l'aide de M. Anders, j'ai pu y avoir accès en scrappant depuis cette page https://www.thecrag.com/climbing/world/maps#44,-0,1.0,,auto. En inspectant la page, sous l'onglet "network", j'ai pu copier le fichier en tant que cURL. Pour mon 2e graphique, j'ai pris les données du classement mondial d'escalade des trois compétitions (lead, boulder & speed) et des catégories par sexe sur https://www.ifsc-climbing.org/index.php/world-competition/ranking en utilisant le même procédé que pour crag. Cependant, j'avais 6 fichiers différents.

## Comment vous les avez transformées
###Graphique du nombre de routes d'escalade :
J'ai fait un R.path pour prendre les données dont j'avais besoin, j'ai dû rajouter la Nouvelle-Zélande et l'Australie à la main car ils étaient dans un autre niveau de plus haut de "children" et j'ai filtré les pays qui n'avaient aucune route d'escalade car ils ne me servaient à rien. J'ai ensuite trié les données par le pays avec le plus de routes et filtré pour que seul les pays avec plus de 1000 routes apparaissent.

###Graphique des résultats d'escalade :
Ces données étaient beaucoup plus difficile à traiter car j'avais 6 fichiers différents. J'ai en premier lieu récupérer les pays ainsi que les points du classement. J'ai ensuite récupérer sur un forum deux fonctions utilisant ramda pour grouper tous les points par pays. Ensuite, j'ai dû faire plusieurs fonctions avec l'aide de M. Anders, pour que les données puissent être lues par billboard car de base il prend les données de chaque table dans l'ordre d'apparition. J'ai dû aussi réutiliser les fonctions sumBy et GroupBy afin de faire le total des points de toutes les catégories par pays afin de trier et filtrer les données


## Quels choix vous avez faits et pourquoi
Je suis passionné par la grimpe et cela m'intéressait de voir différents aspects de cette discipline. Je voulais voir quels pays ont le plus de lieux et de savoir-faire pour la grimpe.

## Comment vous avez visualisé les données
J'ai utilisé billboard, je ne sais pas si c'était la meilleure solution car j'avais l'impression que la librairie était assez limitée. Je ne sais pas si en utilisant uniquement D3, cela m'aurait facilité l'utilisation de mes données, mais en tout cas billboard m'a facilité l'étape création de graphique.

## Une explication sur le choix du type de représentation
J'ai utilisé les charts en bar car c'est le type de représentation qui me paraissait le plus adéquat. On voit directement les différences entre chaque pays. Par contre, comme dans le premier graphe j'ai plus de données, il était plus visuel de mettre les bars dans le sens de la longueur. J'aurais pu faire un graphique où je représente directement les deux graphiques en même temps, mais il était trop compliqué pour moi de regrouper les bases de données ensemble.

## Ce que vous souhaitez démontrer
Dans le premier graphique, je voulais montrer le nombre de routes d'escalade par pays afin de voir où se trouve les pays les plus intéressant pour grimper. Dans le 2e graphique, je voulais montrer dans quelles nations les grimpeurs sont les plus forts asini que de voir s'il y a une tendance selon le sexe et/ou le type d'escalade. En mettant ces deux graphiques côte à côte ,je voulais voir si plus un pays a de routes d'escalade, plus il y a de champions d'escalade dans ce pays.

## Le publique cible
Le public cible est les personnes qui s'intéressent à la grimpe et notamment à la compétition. Cela peut être intéressant pour les personnes qui vont suivre les JO 2020 car l'escalade est enfin une discipline reconnue.