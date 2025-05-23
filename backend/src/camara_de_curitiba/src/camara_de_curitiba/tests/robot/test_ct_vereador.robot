# ============================================================================
# DEXTERITY ROBOT TESTS
# ============================================================================
#
# Run this robot test stand-alone:
#
#  $ bin/test -s camara_de_curitiba -t test_vereador.robot --all
#
# Run this robot test with robot server (which is faster):
#
# 1) Start robot server:
#
# $ bin/robot-server --reload-path src camara_de_curitiba.testing.CAMARA_DE_CURITIBA_ACCEPTANCE_TESTING
#
# 2) Run robot tests:
#
# $ bin/robot /src/camara_de_curitiba/tests/robot/test_vereador.robot
#
# See the http://docs.plone.org for further details (search for robot
# framework).
#
# ============================================================================

*** Settings *****************************************************************

Resource  plone/app/robotframework/selenium.robot
Resource  plone/app/robotframework/keywords.robot

Library  Remote  ${PLONE_URL}/RobotRemote

Test Setup  Open test browser
Test Teardown  Close all browsers


*** Test Cases ***************************************************************

Scenario: As a site administrator I can add a vereador
  Given a logged-in site administrator
    and an add vereador form
   When I type 'My vereador' into the title field
    and I submit the form
   Then a vereador with the title 'My vereador' has been created

Scenario: As a site administrator I can view a vereador
  Given a logged-in site administrator
    and a vereador 'My vereador'
   When I go to the vereador view
   Then I can see the vereador title 'My vereador'


*** Keywords *****************************************************************

# --- Given ------------------------------------------------------------------

a logged-in site administrator
  Enable autologin as  Site Administrator

an add vereador form
  Go To  ${PLONE_URL}/++add++vereador

a vereador 'My vereador'
  Create content  type=vereador  id=my-vereador  title=My vereador

# --- WHEN -------------------------------------------------------------------

I type '${title}' into the title field
  Input Text  name=form.widgets.IBasic.title  ${title}

I submit the form
  Click Button  Save

I go to the vereador view
  Go To  ${PLONE_URL}/my-vereador
  Wait until page contains  Site Map


# --- THEN -------------------------------------------------------------------

a vereador with the title '${title}' has been created
  Wait until page contains  Site Map
  Page should contain  ${title}
  Page should contain  Item created

I can see the vereador title '${title}'
  Wait until page contains  Site Map
  Page should contain  ${title}
