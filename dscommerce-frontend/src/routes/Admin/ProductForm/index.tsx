




import { Link, useParams } from "react-router-dom";
import "./styles.css";
import React from "react";
import { useEffect, useState } from "react";
import { AdminFormDTO } from "../../../models/admin-form";
import * as forms from "../../../utils/forms"
import * as productService from "../../../services/product-service";
import { CategoryDTO } from "../../../models/category";
import * as categoryService from "../../../services/category-service";
import FormSelect from "../../../components/FormSelect";
import FormInput from "../../../components/FormInput";
import FormTextArea from "../../../components/FormTextArea";

export default function ProductForm() {
    
    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    const params = useParams();

    const isEditing = params.productId !== "create";

    const [formData, setFormData] = useState<AdminFormDTO>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function(value: unknown) {
                return /^.{3,80}$/.test(value as string);
            },
            message: "Favor informar um nome de 3 a 80 caracteres",
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function(value: unknown) {
                return Number(value) > 0;
            },
            message: "Favor informar um valor positivo",
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function(value: unknown) {
                return /^.{10,}$/.test(value as string);
            },
            message: "Necessário mínimo de 10 caracteres"
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function(value: unknown) {
                const v = value as CategoryDTO[];
                return v.length > 0;
            },
            message: "Escolha ao menos uma categoria"

        }
    })
    
    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>
    ) {
        setFormData(
            forms.updateAndValidate(
                formData,
                event.target.name as keyof AdminFormDTO,
                event.target.value
            )
        );
    }
    
    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    useEffect(() => {
        categoryService.findAllRequest()
            .then( response => {
                setCategories(response.data);
            })
    }, []);

    useEffect(() => {
        if(isEditing) {
            productService.findById(Number(params.productId))
            .then(response => {
                const newFormData = forms.updateAll(formData, response.data);
                setFormData(newFormData);
            });
        }
    }, []);

    return(
        <main>
            <section id="product-form-section" className="dsc-container">
                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form">
                        <h2>Dados do produto</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput 
                                    {...formData.name}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <FormInput 
                                    {...formData.price}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.imgUrl}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <FormSelect
                                    { ...formData.categories }
                                    className="dsc-form-control"
                                    options={categories}
                                    onChange={(obj: unknown) => {
                                        const newFormData = forms.updateAndValidate(formData, "categories", obj as string)
                                        setFormData(newFormData)
                                    }}
                                    onTurnDirty={handleTurnDirty}
                                    isMulti
                                    getOptionLabel={(obj: unknown) => (obj as CategoryDTO).name}
                                    getOptionValue={(obj: unknown) => String((obj as CategoryDTO).id)}
                                />
                                <div className="dsc-form-error">{formData.categories.message}</div>
                            </div>
                            <div>
                                <FormTextArea 
                                    {...formData.description}
                                    className="dsc-form-control dsc-textarea"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.description.message}</div>
                            </div>
                        </div>

                        <div className="dsc-product-form-buttons">
                            <Link to="/admin/products">
                                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}