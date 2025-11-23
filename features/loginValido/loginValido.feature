Feature: Login válido

  Scenario: Login com sucesso
    Given que acesso a página inicial de login
    When preencho o campo Username com "standard_user"
    And preencho o campo Password com "secret_sauce"
    And clico no botão Login
    Then devo visualizar a página de produtos com o título "Products"