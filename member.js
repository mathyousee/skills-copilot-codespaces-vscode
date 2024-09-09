function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    template: '<div>{{member.name}} <span ng-repeat="skill in member.skills">{{skill}}</span></div>'
  };
}