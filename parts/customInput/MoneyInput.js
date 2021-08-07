import React from 'react'
// import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format';
import labelStyle from "./label.css"

import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
// import formatter from '../../src/components/formatter/currencyForamtter';

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(Number(value)));


const MoneyInput = ({ value, onChange, type }) => (<div>
  <label className={labelStyle.customLable}>{type.title}:</label>
  <NumberFormat value={value !== undefined ? value : ''}
    thousandSeparator={true}
    suffix={' đ'}
    onValueChange={({ value: orgValue }) => {
      onChange(createPatchFrom(orgValue))
    }} />
</div>)

export default MoneyInput
// export default class MoneyInput extends React.Component {
//   static propTypes = {
//     value: PropTypes.number,
//     onChange: PropTypes.func.isRequired
//   };
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = {
//       orgValue: '',
//       formatted: ''
//     };
//     // this.onChange = this.onChange.bind(this);
//   }
//   componentDidMount() {
//     this.setState({
//       orgValue: this.props.value === undefined ? '' : this.props.value,
//       formatted: this.props.value === undefined ? '' : formatter.format(this.props.value)
//     });
//   }
//   componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     // console.log({ orgValue: this.state.orgValue })
//     this.props.onChange(createPatchFrom(this.state.orgValue));

//   }
//   // this is called by the form builder whenever this input should receive focus
//   focus() {
//     this._inputElement.focus()
//   }
//   render() {
//     const {
//       // value,
//       type,
//       // onChange
//     } = this.props
//     return (
//       <div>
//         <label className={labelStyle.customLable}>{type.title}:</label>
//         <NumberFormat value={this.state.orgValue} thousandSeparator={true} suffix={' đ'} onValueChange={(values) => {
//           const { formattedValue, value } = values;
//           // formattedValue = $2,223
//           // value ie, 2223
//           this.setState({
//             orgValue: value,
//             formatted: formattedValue
//           })
//         }} />
//         {/* <input
//           type="text"
//           // min={min}
//           // max={max}
//           // step={step}
//           value={this.state.formatted === undefined ? '' : this.state.formatted}
//           onChange={async event => propOnChange(this.onChange(event.target.value))}
//           ref={element => this._inputElement = element}
//         /> */}
//       </div>
//     )
//   }
// }