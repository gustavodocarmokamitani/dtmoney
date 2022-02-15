import { Container } from "./styles";

export function TransationsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$1.100,00</td>
                        <td>Casa</td>
                        <td>07/02/2022</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    );
}