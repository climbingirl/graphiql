import { useState } from 'react';
import {
  FieldData,
  SchemaData,
  EnumValue,
  InterfaceValue,
} from './Schema.interface';
import Types from './Types/Types';
import Type from './Type/Type';
import Field from './Field/Field';
import styles from './Schema.module.scss';
import Enum from './Enum/Enum';
import Interface from './Interface/Interface';
import QueryType from './QueryType/QueryType';
import rootIcon from '@assets/icons/docs/root.svg';
import allTypesIcon from '@assets/icons/docs/all-types.svg';
import fieldsIcon from '@assets/icons/docs/fields.svg';
import implementsIcon from '@assets/icons/docs/implements.svg';
import enumIcon from '@assets/icons/docs/enum.svg';
import backIcon from '@assets/icons/docs/back.svg';
import Section from './Section/Section';
import { useLocalization } from '@src/hooks/useLocalization';

const Schema = ({ data }: SchemaData) => {
  const { localizationData } = useLocalization();
  const { documentationSchema } = localizationData;

  const schema = data.__schema;
  const [activeTypeStack, setActiveTypeStack] = useState<string[]>([]);

  if (!schema || !schema.types || schema.types.length === 0) {
    return null;
  }

  const setActiveType = (type: string) => {
    setActiveTypeStack((prevStack) => [...prevStack, type]);
  };

  const goBack = () => {
    setActiveTypeStack((prevStack) => prevStack.slice(0, -1));
  };

  const activeType =
    activeTypeStack.length > 0
      ? activeTypeStack[activeTypeStack.length - 1]
      : null;
  const activeTypeData = activeType
    ? schema.types.find((type) => type.name === activeType)
    : undefined;

  return (
    <div>
      {!activeTypeData ? (
        <>
          <Section
            classNameHead={styles.head}
            icon={rootIcon}
            title={documentationSchema.rootTypesTitle}
            setActiveType={setActiveType}
          >
            <QueryType
              name={schema.queryType?.name}
              setActiveType={setActiveType}
            />
          </Section>

          <Section
            classNameHead={styles.head}
            icon={allTypesIcon}
            title={documentationSchema.allTypesTitle}
            setActiveType={setActiveType}
          >
            <Types types={schema.types} setActiveType={setActiveType} />
          </Section>
        </>
      ) : (
        <div className={styles.list}>
          <button data-testid="go-back-button" onClick={goBack}>
            <img src={backIcon} alt="Back" />
            {activeTypeStack.length === 1
              ? documentationSchema.docs
              : activeTypeStack[activeTypeStack.length - 2]}
          </button>

          <Type
            name={activeTypeData.name}
            description={
              activeTypeData.description
                ? activeTypeData.description
                : documentationSchema.noDescription
            }
          />

          {activeTypeData.interfaces &&
            activeTypeData.interfaces.length !== 0 && (
              <Section
                classNameHead={styles.head}
                icon={implementsIcon}
                title={documentationSchema.implementsTitle}
                setActiveType={setActiveType}
              >
                <ul className={styles.interface}>
                  {activeTypeData?.interfaces?.map(
                    (interfaceValue: InterfaceValue) => (
                      <Interface
                        key={interfaceValue.name}
                        name={interfaceValue.name}
                        setActiveType={setActiveType}
                      />
                    )
                  )}
                </ul>
              </Section>
            )}

          {activeTypeData?.enumValues && (
            <Section
              classNameHead={styles.head}
              icon={enumIcon}
              title={documentationSchema.enumValuesTitle}
              setActiveType={setActiveType}
            >
              <ul>
                {activeTypeData?.enumValues?.map((enumValue: EnumValue) => (
                  <Enum key={enumValue.name} name={enumValue.name} />
                ))}
              </ul>
            </Section>
          )}

          {activeTypeData?.fields && (
            <Section
              classNameHead={styles.head}
              icon={fieldsIcon}
              title={documentationSchema.fieldsTitle}
              setActiveType={setActiveType}
            >
              <ul>
                {activeTypeData?.fields?.map((field: FieldData) => (
                  <Field
                    key={field.name}
                    name={field.name}
                    args={field.args}
                    type={field.type}
                    description={field.description}
                    setActiveType={setActiveType}
                  />
                ))}
              </ul>
            </Section>
          )}

          {activeTypeData?.possibleTypes && (
            <Section
              classNameHead={styles.head}
              icon={allTypesIcon}
              title={documentationSchema.implementationsTitle}
              setActiveType={setActiveType}
            >
              <Types
                types={activeTypeData?.possibleTypes}
                setActiveType={setActiveType}
              />
            </Section>
          )}
        </div>
      )}
    </div>
  );
};

export default Schema;
