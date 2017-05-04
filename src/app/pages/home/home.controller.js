export class HomeController {
  constructor ($state, projects) {
    'ngInject';

    this.$state = $state;
    this.projects = projects.data;

    this.options = {
        chart: {
            type: 'pieChart',
            height: 282,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,
            showLegend: false,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true
        }
    };

    this.data = [
        {
            key: "Done",
            y: _.where(this.projects, {status: "1"}).length
        },
        {
            key: "Pending",
            y: _.where(this.projects, {status: "0"}).length
        }
    ];
  }

  openProject(sl) {
    this.$state.go('project-detail', {sl});
  }
}