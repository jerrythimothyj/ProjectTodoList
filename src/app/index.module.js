import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';


import { default as pages } from '../app/pages/pages.module';
import { default as component } from '../app/components/component.module';
import { default as services } from '../app/services/services.module';
import { default as domain } from '../app/domain/domain.module';

angular.module('projectManagement', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr', 
                                pages, component, services, domain])
  .config(config)
  .config(routerConfig)
  .run(runBlock);
