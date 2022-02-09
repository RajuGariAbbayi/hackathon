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
                                            'data-target="#controllers-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' : 'data-target="#xs-controllers-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' :
                                            'id="xs-controllers-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' : 'data-target="#xs-injectables-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' :
                                        'id="xs-injectables-links-module-AppModule-754fad593785c4f6daf7594bdd15cf6605e5e4630c2fd047cc8efe5cbdc802340f4278bffb50636dc115edad0cb24727bf55c5597a20797a18ac16fc53324995"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookingsModule.html" data-type="entity-link" >BookingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' : 'data-target="#xs-controllers-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' :
                                            'id="xs-controllers-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' }>
                                            <li class="link">
                                                <a href="controllers/BookingsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' : 'data-target="#xs-injectables-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' :
                                        'id="xs-injectables-links-module-BookingsModule-5a4b6523f6114fca602d74938632bb5672fb741391b6147a9ff8051945b76966e8769a5abc672bb9bed7226586babc1f851f08c875138533ccd9236d656ffc57"' }>
                                        <li class="link">
                                            <a href="injectables/BookingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocationsModule.html" data-type="entity-link" >LocationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' : 'data-target="#xs-controllers-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' :
                                            'id="xs-controllers-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' }>
                                            <li class="link">
                                                <a href="controllers/LocationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' : 'data-target="#xs-injectables-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' :
                                        'id="xs-injectables-links-module-LocationsModule-4bb82dffa68e618abca19fa31ce30a63acece136b990ae0dd43204f89bd4d1818d4dadb0972c59b7991937b70e5d2383d27446a4ed23306bc8ed917d06966111"' }>
                                        <li class="link">
                                            <a href="injectables/LocationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlotsModule.html" data-type="entity-link" >SlotsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' : 'data-target="#xs-controllers-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' :
                                            'id="xs-controllers-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' }>
                                            <li class="link">
                                                <a href="controllers/SlotsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlotsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' : 'data-target="#xs-injectables-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' :
                                        'id="xs-injectables-links-module-SlotsModule-aaeb9346e4d73385b1c4bb51a112f7a57eda72d8960d0668a9c7881ae38b4ae9d9315d6aea2f8026b54f9e21324170faf3a7558c9696cff675a768cf8d928690"' }>
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
                                            'data-target="#controllers-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' : 'data-target="#xs-controllers-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' :
                                            'id="xs-controllers-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' : 'data-target="#xs-injectables-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' :
                                        'id="xs-injectables-links-module-UsersModule-3c80651d902362b8b3d1cc76b17fcbaf323b1b6456487b4e6d0c71f1c9e979735e2a8c8a41f7f9af69cb6a287df55444eb5f93dce6e89c18074805fcea560643"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
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
                                    <a href="controllers/BookingsController.html" data-type="entity-link" >BookingsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LocationsController.html" data-type="entity-link" >LocationsController</a>
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
                                    <a href="entities/Bookings.html" data-type="entity-link" >Bookings</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Doctors.html" data-type="entity-link" >Doctors</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Locations.html" data-type="entity-link" >Locations</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Slots.html" data-type="entity-link" >Slots</a>
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
                                <a href="classes/BookingsDTO.html" data-type="entity-link" >BookingsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookingsRepository.html" data-type="entity-link" >BookingsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorRepository.html" data-type="entity-link" >DoctorRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorsDTO.html" data-type="entity-link" >DoctorsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExceptionExceptionFilter.html" data-type="entity-link" >ExceptionExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationsDTO.html" data-type="entity-link" >LocationsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationsRepository.html" data-type="entity-link" >LocationsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDTO.html" data-type="entity-link" >LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlotsDTO.html" data-type="entity-link" >SlotsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlotsRepository.html" data-type="entity-link" >SlotsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusDTO.html" data-type="entity-link" >StatusDTO</a>
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
                                    <a href="injectables/BookingsService.html" data-type="entity-link" >BookingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationsService.html" data-type="entity-link" >LocationsService</a>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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