describe('Collapse', () => {
  const CollapseInjector = require('inject!../src/Collapse');
  let mock, Collapse;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => Collapse = CollapseInjector({
    mock
  }));


  it('should be ok', () => {
    expect(Collapse).toBeTruthy();
  });
});
