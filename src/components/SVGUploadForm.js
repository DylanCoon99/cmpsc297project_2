import React from "react";
import { Form, Input, Button } from "antd";
const isSVG = require("is-svg");

//SVG upload form container
export default function SVGUploadForm({ updateSVG }){
    //contains code for SVG upload form
    
    const [form] = Form.useForm();

    const onSubmit = (formData) => {
        //construct tthe new svg from the form data
        let newSVG = {
            title: formData.title,
            svg: formData.svg,
        };

        //check if the svg is valid
        if(isSVG(newSVG.svg)){
            updateSVG(newSVG);
            //alert the user the svg has been submitted
            alert(`SVG ${newSVG.title} has been submitted to GUN.`);
        }else{
            //alert the user the svg is invalid
            alert(`${newSVG.title} is not valid SVG`);
        }

        //clear the form data boxes
        form.resetFields();
    };

    const onFinishedFailed = (errorInfo) => {
        console.log("Failed SVG input:", errorInfo);
    };

    //returns a JSX component for the SVG upload form
    return(
        <>
            {/* form structure */}
            <Form
                name = "svg-upload-form"
                form = {form}
                labelCol = {{ span: 8 }}
                wrapperCol = {{ span: 8 }}
                initialValues = {{ remember: false }}
                onFinish = {onSubmit}
                onFinishedFailed = {onFinishedFailed}
                autoComplete = "off"
            >
                
                {/* Title input segment for form*/}
                <Form.Item
                    label = "Title"
                    name = "title"
                    rules = {[
                        {
                            required: true,
                            message: "Please enter a title for the SVG",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>        

                <Form.Item
                    label = "SVG"
                    name = "svg"
                    rules = {[
                        {
                            required: true,
                            message: "Please enter a valid SVG as a string",
                        },
                    ]}
                >
                    <Input.TextArea rows = {15} />
                </Form.Item>
                
                {/* Submit button*/}
                <Form.Item
                    wrapperCol = {{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type = "primary" htmlType = "submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
}
