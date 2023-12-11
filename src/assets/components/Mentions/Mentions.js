import styles from "./Mentions.module.scss"

import React from 'react';

function Mentions() {
    return (
        <div className="center">
            <h2 className={styles.top} >Mentions Légales</h2>
            <div className="df jcsb mb3pc fw gap1">
                <div className="df fc gap1">
                    <h3>Éditeur</h3>
                    <ul>
                        <li>.LilleLatinaDance</li>
                        <li>.16 rue Paul Ramadier 59800 Lille</li>
                        <li>.lillelatinadance@org.com</li>
                        <li>.SARL au capital de XXXXX€ €</li>
                        <li>.SIREN: XXX XXX XXX</li>
                        <li>.Directeur de publication : M. MANT Francis</li>
                    </ul>
                </div>
                <div className="df fc gap1">
                    <h3>Développeur</h3>
                    <ul>
                        <li>.Dev&Co</li>
                        <li>.Rue Florence de Verquigneul 62370 Verquigneul</li>
                        <li>.SIREN: XXX XXX XXX</li>
                        <li>.APE code: XXXXX</li>
                    </ul>
                </div>
                <div className="df fc gap1">
                    <h3>Hébergeur</h3>
                    <ul>
                        <li>.VERCEL</li>
                        <li>.SIREN: XXX XXX XXX</li>
                        <li>.APE code: XXXXX</li>
                    </ul>
                </div>
            </div>
            <div className="df fc gap1 mb3pc" >
                <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site https://lillelatinadance.fr les présentes mentions légales.
                    La connexion et la navigation sur le site LilleLatinaDance par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                    Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>
                <h3>Accès au site</h3>
                <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
                    En cas de modification, interruption ou suspension des services le site https://lillelatinadance.fr ne saurait être tenu responsable.</p>
                <h3>Collecte des données</h3>
                <p>Les informations collectées par le biais du présent site sont exclusivement destinées à son propriétaire aucune de ces informations ne sera donc vendue ou communiquée à un tiers.
                    Conformément aux dispositions de la loi n° 78-17 du 6 Janvier 1978 relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification, de modification et de suppression concernant les données qui vous concernent.</p>
                <h3>Cookies</h3>
                <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
                    En navigant sur le site, il les accepte. Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
                <h3>Propriété intellectuelle</h3>
                <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site https://lillelatinadance.fr, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
            </div>
        </div>
    );
}

export default Mentions;