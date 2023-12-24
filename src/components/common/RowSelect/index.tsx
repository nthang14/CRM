import {Col, Row} from "antd";
import SelectCommon from "~/components/common/SelectCommon";

const RowSelect = ({...props}) => {
  return (
    <>
      <Row className="pt-6">
        <Col
          span={8}
          className="text-xl font-semibold text-right pr-4 flex-important items-center p-2"
        >
          <div className={'w-full'}>
            {props.title}
            {props.required ? (<span className="pni-danger-text"> &#0042;</span>) : ''}
          </div>
        </Col>
        <Col span={8} className="text-xl font-semibold pl-4">
          <SelectCommon
            {...props}
          />
        </Col>
      </Row>
    </>
  )
}

export default RowSelect