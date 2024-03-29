import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import { Container } from './styles'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>- R$1000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    )
}