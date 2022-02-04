'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">final-hackathon documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' : 'data-target="#xs-controllers-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' :
                                            'id="xs-controllers-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' : 'data-target="#xs-injectables-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' :
                                        'id="xs-injectables-links-module-AppModule-16dc25001157a21d6312926c6ca4a401b520ff476420351921c0570abbc95f988cb998284c19a86484c381654fa7038f8a5e6ea9a825968fe9f09d2412ff9ae3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlotsModule.html" data-type="entity-link" >SlotsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' : 'data-target="#xs-controllers-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' :
                                            'id="xs-controllers-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' }>
                                            <li class="link">
                                                <a href="controllers/SlotsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlotsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' : 'data-target="#xs-injectables-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' :
                                        'id="xs-injectables-links-module-SlotsModule-64b2193b668875a41034db7e357c9222c56d45b8ec0640da3782d92f167f6568b027b3a9ee946cabe5b104f0cd456f38b6a6f07046e300ccb164e8a4ea4f6565"' }>
                                        <li class="link">
                                            <a href="injectables/SlotsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlotsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' : 'data-target="#xs-controllers-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' :
                                            'id="xs-controllers-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' : 'data-target="#xs-injectables-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' :
                                        'id="xs-injectables-links-module-UsersModule-d1ef87a5e689d87fe3844041f9582aeb2e30518ad975dfeffa749bdd5a9855d23a244f457382c26b460c83ad05fe257eb171318bfa67a611d2806333b27258c0"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SlotsController.html" data-type="entity-link" >SlotsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Doctor.html" data-type="entity-link" >Doctor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Users.html" data-type="entity-link" >Users</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DoctorDTO.html" data-type="entity-link" >DoctorDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDTO.html" data-type="entity-link" >LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Slots.html" data-type="entity-link" >Slots</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlotsDTO.html" data-type="entity-link" >SlotsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlotsRepository.html" data-type="entity-link" >SlotsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersDTO.html" data-type="entity-link" >UsersDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersRepository.html" data-type="entity-link" >UsersRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGard.html" data-type="entity-link" >JwtAuthGard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseInterceptor.html" data-type="entity-link" >ResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SlotsService.html" data-type="entity-link" >SlotsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});