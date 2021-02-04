import { DataService } from './services/data.service';
import { Idata } from './services/Idata';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectTest';

  constructor(
    private data: DataService
  ) {
    this.data.getData().subscribe(
      res => {
        this.datas = res;
      }
    )
  }

  datas: Idata[] = [
    {
      date: "01/01",
      title: "Confraternização Universal",
      description: "Início do ano civil, Dia Mundial da Paz, além de Dia da Fraternidade Universal, sendo assim, um feriado internacional, adotado por quase todas as nações do planeta.",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    },
    {
      date: "",
      title: "Sexta-Feira da Paixão",
      description: "Data cristã na qual a morte de Cristo é lembrada.",
      legislation: "Lei nº 9.093, de 12 de setembro de 1995 - http://www.planalto.gov.br/ccivil_03/Leis/L9093.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {
      }
    },
    {
      date: "21/04",
      title: "Tiradentes",
      description: "Homenagem ao mártir da Inconfidência Mineira",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    },
    {
      date: "01/05",
      title: "Dia do Trabalhador",
      description: "Dia Internacional dos Trabalhadores, adotado por muitos países.",
      type: "feriado",
      startTime: "",
      endTime: "",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      variableDates: {

      }
    },
    {
      date: "07/09",
      title: "Independência",
      description: "Data do chamado Grito do Ipiranga, que iniciou o processo de Independência do Brasil.",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    },
    {
      date: "12/10",
      title: "Nossa Senhora Aparecida",
      description: "Padroeira do Brasil",
      legislation: "Lei nº 6.802, de 30 de junho de 1980 - http://www.planalto.gov.br/ccivil_03/Leis/L6802.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    },
    {
      date: "02/11",
      title: "Finados",
      description: "Dia de memória aos mortos",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    },
    {
      date: "15/11",
      title: "Proclamação da República",
      description: "Derrubada da Monarquia e instalação da República.",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    },
    {
      date: "25/12",
      title: "Natal",
      description: "Celebração cristã do nascimento de Cristo",
      legislation: "Lei nº 10.607, de 19 de dezembro de 2002 - http://www.planalto.gov.br/ccivil_03/leis/2002/L10607.htm",
      type: "feriado",
      startTime: "",
      endTime: "",
      variableDates: {

      }
    }
  ]

  verifyObject(o) {
    return JSON.stringify(o) === '{}'
  }
}
