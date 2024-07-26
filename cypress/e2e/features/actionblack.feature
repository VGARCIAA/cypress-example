Feature: Reserva de clases

Scenario Outline: Scenario Outline name: Reserva exitosa de clases
Given Un usuario visita la "urlActionBlack" de reservas
When El usuario selecciona una "<sede>" y "<clase>"
And Se logea con "<usuario>" y "<password>" validos
Then Puede confirmar la reserva

Examples:
    | usuario | password | sede | clase |
    | ejportillap@gmail.com | Canela.1  | Sabaneta | JAB |