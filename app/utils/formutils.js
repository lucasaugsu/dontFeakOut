import React from 'react';
import { TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';

import validarCPF from './validarcpf';
import validateEmail from './validateemail';
import validatePassword from './validatepassword';
import { GENDER_LABELS } from './PassConstants';
import { Icon, ICON_TYPES } from '../components/icon';
import { sizes, colors } from '../config/theme';

let password;
let formRef;
const setPassword = (value) => {
  password = value;
};
const setFormRef = (ref) => {
  formRef = ref;
};

// Nome
const NameType = t.refinement(t.String, name => !/\d/.test(name));
NameType.getValidationErrorMessage = (value) => {
  const DEFAULT_NAME_ERROR = 'Digite seu nome completo';
  if (!value) return DEFAULT_NAME_ERROR;

  if (value.split(' ').length === 1) {
    return DEFAULT_NAME_ERROR;
  }

  if (/\d/.test(value)) {
    return 'O nome não pode conter números';
  }
  return '';
};

// CPF
const CPFType = t.refinement(t.String, cpf => validarCPF(cpf));
CPFType.getValidationErrorMessage = (value) => {
  if (!value) return 'Digite o CPF';
  const cpf = value.split(/\.|-/).join('');
  if (!validarCPF(cpf)) {
    return 'Digite um CPF válido';
  }
  return '';
};

// Email
const EmailType = t.refinement(t.String, email => validateEmail(email));
EmailType.getValidationErrorMessage = (value) => {
  if (!value) return 'Digite seu email';
  if (!validateEmail(value)) {
    return 'Digite um email válido';
  }
  return '';
};

// Social
const SocialType = t.refinement(t.String, social => !/\d/.test(social));
SocialType.getValidationErrorMessage = (value) => {
  if (!value) return 'Digite um @ para seu perfil';
  return null;
};

// Gender
const GenderType = t.enums(GENDER_LABELS, 'Gênero');

// Password
const PasswordType = t.refinement(t.String, value => validatePassword.validate(value));
PasswordType.getValidationErrorMessage = (value) => {
  if (!value) {
    return 'Digite sua senha';
  }

  if (!validatePassword.validate(value)) {
    return validatePassword.message;
  }

  return '';
};

// PasswordConfirmation
const PasswordConfirmationType = t.refinement(
  t.String,
  passwordConfirmation => passwordConfirmation === password,
);
PasswordConfirmationType.getValidationErrorMessage = (passwordConfirmation) => {
  if (!passwordConfirmation) {
    return 'Confirme sua senha';
  }
  if (password !== passwordConfirmation) {
    return 'As senhas não são iguais';
  }

  return '';
};

const getPasswordTemplate = (locals) => {
  const onIconPress = () => {
    const passwordRef = formRef.getComponent('password');
    const passwordOptions = passwordRef.props.options;
    passwordOptions.secureTextEntry = !passwordOptions.secureTextEntry;
    passwordRef.forceUpdate();
  };

  return (
    <TouchableOpacity
      style={{ position: 'absolute', alignSelf: 'flex-end', right: sizes.COMMON_SPACE }}
      onPress={onIconPress}
    >
      <Icon
        IconType={ICON_TYPES.Feather}
        name={locals.secureTextEntry ? 'eye' : 'eye-off'}
        size={24}
        style={{ color: colors.blackOpacity }}
      />
    </TouchableOpacity>
  );
};

// Data
const validarData = (value) => {
  if (!value) return false;
  const dt = value.split('/').join('');
  return dt.length === 8;
};
const DateType = t.refinement(t.String, value => validarData(value));
DateType.getValidationErrorMessage = (value) => {
  if (!value) return 'Informe a data de nascimento (dd/mm/aaaa)';
  if (!validarData(value)) {
    return 'Informe a data de nascimento (dd/mm/aaaa)';
  }
  return '';
};

export {
  setPassword,
  setFormRef,
  NameType,
  CPFType,
  EmailType,
  SocialType,
  GenderType,
  PasswordType,
  PasswordConfirmationType,
  DateType,
  getPasswordTemplate,
};
