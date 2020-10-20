import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
import './accordion.scss'
const { Panel } = Collapse
const { Option } = Select



const text = `
  What’s more, it’s a healthy and fun way to bring more exercise into our lives. Anyone, at any age, can enjoy group dancing, from the very young children to senior citizens.
`;



class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

   iconChanger = ()=>{
    
    console.log('clicks')

   }


   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                onClick={event => {
                    event.stopPropagation();
                }}
            />
            )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
}

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel
            className="panel" 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
          className="panel"
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/dancing-for-fun-group-dancing-for-all-ages-book-1/',
                          barnes: 'https://www.barnesandnoble.com/w/dancing-for-fun-mark-l-greathouse/1136305114?ean=9781643458564',
                          amazon :'https://www.amazon.com/Dancing-Fun-Book-Group-Ages-ebook/dp/B08464KBY9/ref=sr_1_1?keywords=9781643458564&qid=1580497208&sr=8-1', 
                        },
                        reviews:{},
                        isNonfront:false,
                        paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
          className="panel"
            header="Purschase PaperBack" 
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            paperback:{
                              amazon:'https://www.amazon.com/Dancing-Fun-Book-Group-Ages/dp/1643458558/ref=sr_1_1?keywords=9781643458557&qid=1580497235&sr=8-1',
                              barnes:'https://www.barnesandnoble.com/w/dancing-for-fun-mark-l-greathouse/1136305114?ean=9781643458557',
                              booksamillion:'https://www.booksamillion.com/p/Dancing-Fun/Mark-L-Greathouse/9781643458557?id=8009965417365&_ga=2.130984967.948029403.1603093179-1770015116.1600996550',
                          }
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions