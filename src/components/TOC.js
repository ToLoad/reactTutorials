import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){ // 컴포넌트를 실행할지 안할지 설정가능, 불필요한 render를 제거하여 성능을 향상
    if(newProps.data === this.props.data){return false} 
    // list에서 concat이 아닌 push를 사용 할 경우 원본과 바뀐값이 동일하기 때문에 이와 같은 if문을 사용하지 못함
    // push를 사용하고 싶은 경우, Array.from 으로 복제해서 사용하면 된다.
    // 객체의 경우 Object.assign 을 사용
    // immutable 참고
    else{return true}
  }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
              <li key={data[i].id}>
                <a
                 href={"/content/"+data[i].id}
                 data-id={data[i].id}
                 onClick={function(e){
                   e.preventDefault();
                   this.props.onChangePage(e.target.dataset.id);
                 }.bind(this)}
                 >{data[i].title}</a>
              </li>);
            i = i + 1;
        }

      return(
        <nav>
          <ul>
            {lists}
          </ul>
      </nav>
      );
    }
  }

export default TOC;