import { stringify } from "qs";

export const state = () => ({
  managerDetailsItems: [
    {
      type: 'UBS-OConnor',
      managerImg:"/images/managers/UBS O_Connor GMA.jpg",
      managerData:[
        {
          tabTitle: "About",
          isActive: true,
          tabContent: 
            {
              contentBody:[{
                content: "As one of the world's largest hedge fund investors, we offer a comprehensive spectrum of hedge fund investment solutions that seek to meet your evolving needs. Our hedge fund platform includes commingled funds, customized discretionary portfolios and a range of advisory partnerships."
              }],
            },
        },
        {
          tabTitle: "Bios",
          isActive: false,
          tabContent: 
            {
              contentBody:[
                {
                contentTitle: "Portfolio Manager",
                contentName: "Joseph (Joe) Newell",
                content: `Joe is the Head of Merger Arbitrage at UBS O'Connor
                and is a member of both the UBS O'Connor
                Management and Capital Allocation Teams. He has
                been investing in Merger Arbitrage for O'Connor for
                over 23 years and has managed the strategy since
                2005.
                Joe’s trading career began on the floor of the
                Chicago Board Options Exchange.`
              },
              {
                contentTitle: "Portfolio Manager",
                contentName: "Gurpreet Ottal",
                content: `Prior to joining O'Connor in 2015, Gurpreet was
                a Portfolio Manager at TT International in London,
                managing a Global Event-Driven strategy within
                the firm's hedge fund business.
                Prior to TT International, he worked at CR Intrinsic
                (a unit of SAC Capital), in London, focusing on
                European and US event-driven situations.
                Gurpreet began his career at Lehman Brothers, in
                London, within the firm's Global Trading Strategies
                group, an internal hedge fund focused on event-driven
                situations across equity and debt.`
              }
            ],
            },
        },
        {
          tabTitle: "Funds",
          isActive: false,
          tabContent: 
            {
              contentBody: [
                {
                  content:"",
                  list:[{
                    text:"UBS (Canada) Global Merger Arbitrage Fund",
                    url:"/products/Global-Merger-Arbitrage-Fund?id=2"
                  },{
                    text:"UBS (Canada) Global Real Estate Fund",
                    url:"/products/Global-Real-Estate-Fund?id=5"
                  }]
                }
              ],
            },
        },
        
      ],
      sidebarContent: [
        {
          icon: "money-bill-wave",
          label: "AUM",
          value: "$12 Billion USD",
        },
        {
          icon: "chalkboard-teacher",
          label: "Employees",
          value: "3400",
        },
        {
          icon: "chalkboard-teacher",
          label: "Founded",
          value: "1977",
        },
        {
          icon: "chalkboard-teacher",
          label: "Headquarters",
          value: "New York City, USA",
        },
      ]
  },
  {
    type: 'Neuberger',
    managerImg:"/images/managers/Neuberger Berman logo.png",
    managerData:[
      {
        tabTitle: "About",
        isActive: true,
        tabContent: 
          {
            contentBody:[{
              content: "Neuberger Berman, founded in 1939, is a private, independent, employee-owned investment manager. The firm manages a range of strategies—including equity, fixed income, quantitative and multi-asset class, private equity, real estate and hedge funds—on behalf of institutions, advisors and individual investors globally. With offices in 25 countries, Neuberger Berman’s diverse team has over 2,300 professionals. For seven consecutive years, the company has been named first or second in Pensions & Investments Best Places to Work in Money Management survey (among those with 1,000 employees or more). In 2020, the PRI named Neuberger Berman a Leader, a designation awarded to fewer than 1% of investment firms for excellence in Environmental, Social and Governance (ESG) practices. The PRI also awarded Neuberger Berman an A+ in every eligible category for our approach to ESG integration across asset classes."
            }],
          },
      },
      {
        tabTitle: "Bios",
        isActive: false,
        tabContent: 
          {
            contentBody:[
              {
              contentTitle: "Managing Director",
              contentName: "PETER STERLING",
              content: `Head of Neuberger Berman’s Specialty Finance team. Prior to joining the firm in 2018, Peter served as President of Coastland Capital, an
              asset manager within the relative value and specialty finance strategies. Peter served as the Portfolio Manager for Coastland’s specialty finance vehicle which invested across consumer
              and small business loans/receivables with an emphasis on the Fintech space. The group underwrote and purchased several hundred million dollars of varying assets across the whole
              loan, receivable, and securitized ABS markets. Prior to joining Coastland, Peter underwrote and purchased non-performing loan investments within the consumer and commercial credit
              card industries. From 2001-2005, Peter served as a Portfolio Manager focusing on credit arbitrage strategies at Marin Capital and previously at KBC Alternative Investment Management
              Ltd., a multi-strategy asset manager with several billion dollars under management. During his tenure, Peter co-managed a large credit portfolio large focused on capital structure
              arbitrage. Previous to that, Peter was initially hired into D.E. Shaw’s Financial Products group which was subsequently sold to KBC Bank, managing their U.S. convertible bond arbitrage
              portfolio. Prior to that, Peter traded equity derivatives for Gateway Partners on the floors of the American and Philadelphia Stock Exchanges. Peter received a BA with a dual major in
              Economics and Psychology from Cornell University.`
            },
            {
              contentTitle: "Managing Director",
              contentName: "ZHENGYUAN LU",
              content: `Managing Director on Neuberger Berman’s Specialty Finance team. Prior to joining Neuberger Berman, Lu was a Managing Director and head of the
              Warehouse Financing Group with SVB Financial Group (“SVB”), where he was responsible for debt investments in the Fintech sector. Prior to SVB, Lu was in a similar capacity with
              Victory Park Capital. Prior to that, Lu was a senior vice president and head of Capital Markets and Treasury at OnDeck (“ONDK”), where he spearheaded all capital markets and
              fundraising activities. This also included the management of OnDeck Marketplace, the crowd funding platform of OnDeck and Treasury and Cash Management. As a member of
              OnDeck’s Executive and Management Committee, Lu was involved in all aspects of its strategic and operational initiatives. Prior to OnDeck, he was a managing director and head of the
              Asset Financing Group at Gleacher & Company, where he was responsible for the origination and financing of esoteric assets. Before joining Gleacher, Lu was a managing director and
              head of Structured Products Group at Keefe, Bruyette & Woods (now Stifel Financial), where he ran all banking and trading activities for structured products. He was a senior vice
              president/executive director with Fortis Bank and WestLB AG. Lu was also a portfolio manager at PPM America (asset management arm of Prudential U.K.). Lu holds a B.A in Economics
              and Computer Science from Middlebury College.`
            },
            {
              contentTitle: "Senior VIce President",
              contentName: "FARSHAD MASHAYEKHI",
              content: `Jay is an underwriting analyst on the NB Specialty Finance Team and responsible for sourcing and due diligence of
              lending platforms and related deals. Within the group, Jay focuses on analyzing consumer credit, small business and bridge lending opportunities. Jay is also a research analyst on the
              NB Alternative Investment Management Team responsible for sourcing and due diligence of hedge fund managers including co-invest opportunities with a focus on credit-related
              transactions. He graduated from Yeshiva University with a BA in Mathematics. Jay has been awarded the Chartered Financial Analyst designation.`
            },
            {
              contentTitle: "Senior VIce President",
              contentName: "XIN XUE",
              content: `Senior Vice President on Neuberger Berman's Specialty Finance team. Prior to joining Neuberger Berman, Xin spent six years in the Structured Finance group of the
              Investment Banking Division at Goldman Sachs, where she structured securitizations across consumer and esoteric sectors and advised clients on portfolio sale and acquisitions and
              financing alternatives. Prior to that, Xin spent over five years in the Structured Finance Group at Standard & Poor's (S&P), focusing on consumer ABS sectors. Xin holds a M.S. in
              Computational Finance from Carnegie Mellon University.`
            },
            {
              contentTitle: "Vice President",
              contentName: "KAREN BI",
              content: `Private Credit Modelling Analyst on the NB Specialty Finance Team and is responsible for data analytics to evaluate deal assets and monitor existing
              portfolio performance trends. Prior to joining NB in 2020, Karen served more than seven years at Colchis Capital in a similar position, and her experience spans a broad set of loan
              products including consumer, small business, real estate bridge, and student lending, as well as structured products such as credit lines and notes. She graduated from Stanford
              University with a MS in Management Science and Engineering as well as University of Maryland, College Park with a BS in Economics and Minor in Actuarial Mathematics.`
            },
            {
              contentTitle: "Associate",
              contentName: "MITCHELL BOOTH",
              content: `Analyst on the NB Specialty Finance Team. Prior to joining Neuberger Berman in 2021, Mitchell was an investment banking analyst within J.P.
              Morgan’s asset backed securities business focusing on consumer, credit card, small business, and student loan assets. He worked with originators on both warehouse financing and ABS
              issuance. Mitchell graduated from the University of Chicago with a BA in Economics.`
            }
          ],
          },
      },
      {
        tabTitle: "Funds",
        isActive: false,
        tabContent: 
          {
            contentBody: [
              {
                content:"",
              }
            ],
          },
      },
      
    ],
    sidebarContent: [
      {
        icon: "money-bill-wave",
        label: "AUM",
        value: "$433 Billion CAD",
      },
      
      {
        icon: "chalkboard-teacher",
        label: "Founded",
        value: "1939",
      },
      {
        icon: "chalkboard-teacher",
        label: "Headquarters",
        value: "New York City, USA",
      },
    ]
  },
  {
    type: 'Lionguard',
    managerImg:"/images/managers/lionguard.png",
    managerData:[
      {
        tabTitle: "About",
        isActive: true,
        tabContent: 
          {
            contentBody:[{
              content: "LionGuard Capital Management Inc. is an investment management company incorporated under the laws of Canada and registered in the Province of Quebec with the Autorité des Marchés Financiers (AMF), as Portfolio Manager, Investment Fund Manager and Exempt Market Dealer. LionGuard manages assets for institutional investors, family offices, funds of funds, investment advisors and select high net worth individuals. We endeavor to generate industry-leading risk-adjusted returns for our clients by capitalizing on the unique inefficiencies present in smaller-capitalization stock markets."
            }],
          },
      },
      {
        tabTitle: "Bios",
        isActive: false,
        tabContent: 
          {
            contentBody:[
              {
              contentTitle: "President,Chief Investment Officer (CIO)",
              contentName: "Andrey Omelchak",
              content: `Andrey Omelchak is the President, Chief Executive Officer and Chief Investment Officer of LionGuard Capital Management Inc., the Company he founded in April 2014. As President & CEO, Andrey sets the Company’s corporate direction, makes key personnel hiring decisions and ensures adherence to the highest ethical and professional standards in all dealings. As Chief Investment Officer, Andrey oversees the investment strategy of the Funds managed by the Company.`
            },
            {
              contentTitle: "Portfolio Manager",
              contentName: "Jordan Steiner",
              content: `Jordan Steiner joined LionGuard Capital Management as Portfolio Manager. His role spans sourcing of investment ideas, research and analysis, investment monitoring, as well as managing LionGuard’s client assets across select funds and strategies. Excellent at uncovering ideas in out-of-the-way places, Jordan then conducts detailed fundamental research on potential investments which includes going through numerous public filings, speaking with interested parties, and ultimately determining if LionGuard’s stringent requirements both in terms of business quality and margin of safety are met.`
            },
            {
              contentTitle: "Managing Director,Head of Distribution",
              contentName: "Pierre Czyzowicz,",
              content: `Pierre Czyzowicz joined LionGuard’s senior leadership as Managing Director and Head of Distribution. Pierre is responsible for overseeing all aspects of distribution including business development and relationship management. His vast experience in the investment industry at Canadian and international firms gives him a thorough understanding of the best practices in place at world-class firms across the globe.`
            }
          ],
          },
      },
      {
        tabTitle: "Funds",
        isActive: false,
        tabContent: 
          {
            contentBody: [
              {
                content:"",
              }
            ],
          },
      },
      
    ],
    sidebarContent: [
      
      {
        icon: "chalkboard-teacher",
        label: "Founded",
        value: "2014",
      },
      {
        icon: "chalkboard-teacher",
        label: "Headquarters",
        value: "Montreal, Canada",
      },
    ]
  },
  {
    type: 'Mulvihill',
    managerImg:"/images/managers/UBS O_Connor GMA.jpg",
    managerData:[
      {
        tabTitle: "About",
        isActive: true,
        tabContent: 
          {
            contentBody:[{
              content: "As one of the world's largest hedge fund investors, we offer a comprehensive spectrum of hedge fund investment solutions that seek to meet your evolving needs. Our hedge fund platform includes commingled funds, customized discretionary portfolios and a range of advisory partnerships."
            }],
          },
      },
      {
        tabTitle: "Bios",
        isActive: false,
        tabContent: 
          {
            contentBody:[
              {
              contentTitle: "Portfolio Manager",
              contentName: "Joseph (Joe) Newell",
              content: `Joe is the Head of Merger Arbitrage at UBS O'Connor
              and is a member of both the UBS O'Connor
              Management and Capital Allocation Teams. He has
              been investing in Merger Arbitrage for O'Connor for
              over 23 years and has managed the strategy since
              2005.
              Joe’s trading career began on the floor of the
              Chicago Board Options Exchange.`
            },
            {
              contentTitle: "Portfolio Manager",
              contentName: "Gurpreet Ottal",
              content: `Prior to joining O'Connor in 2015, Gurpreet was
              a Portfolio Manager at TT International in London,
              managing a Global Event-Driven strategy within
              the firm's hedge fund business.
              Prior to TT International, he worked at CR Intrinsic
              (a unit of SAC Capital), in London, focusing on
              European and US event-driven situations.
              Gurpreet began his career at Lehman Brothers, in
              London, within the firm's Global Trading Strategies
              group, an internal hedge fund focused on event-driven
              situations across equity and debt.`
            }
          ],
          },
      },
      {
        tabTitle: "Funds",
        isActive: false,
        tabContent: 
          {
            contentBody: [
              {
                content:"",
              }
            ],
          },
      },
      
    ],
    sidebarContent: [
      {
        icon: "money-bill-wave",
        label: "AUM",
        value: "$12 Billion USD",
      },
      {
        icon: "chalkboard-teacher",
        label: "Employees",
        value: "3400",
      },
      {
        icon: "chalkboard-teacher",
        label: "Founded",
        value: "1977",
      },
      {
        icon: "chalkboard-teacher",
        label: "Headquarters",
        value: "New York City, USA",
      },
    ]
  },
]
});

export const getters = {
  getManagerDetailsItems: (state) => (manager) => {
    //  console.log("filtro:"+manager);
    //  console.log("filtro:"+JSON.stringify(state.managerDetailsItems.filter(m=> m.type === manager)));
    return state.managerDetailsItems.find(m=> m.type.toUpperCase() == manager.toUpperCase());
  },
};
