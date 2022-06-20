import {
  AppBar,
  Box,
  Button,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Laboratorios, Propriedades } from './data';
import { FeedBack } from './form-components/Feedback';
import { FormInputDate } from './form-components/FormInputDate';
import { FormInputLab } from './form-components/FormInputLab';
import { FormInputObservacao } from './form-components/FormInputObservacao';
import { FormInputPropriedade } from './form-components/FormInputPropriedade';
import { FormInputText } from './form-components/FormInputText';

interface IFormInput {
  nome: string;
  dataInicial: Date;
  dataFinal: Date;
  selectLaboratorio: string;
  selectPropriedade: string;
  observacao: string;
}

const defaultValues = {
  nome: '',
  dataInicial: new Date(),
  dataFinal: new Date(),
  selectLaboratorio: '',
  selectPropriedade: '',
  observacao: '',
};

export const FormAgrotis = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });

  const [openInvalido, setOpenInvalido] = useState(false);
  const [openCadastrado, setOpenCadastrado] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    setOpenCadastrado(true);
    const json = {
      nome: data.nome,
      dataInicial: data.dataInicial,
      dataFinal: data.dataFinal,
      observacoes: data.observacoes,
      infosPropriedade: Propriedades.find(
        option => option.id === data.selectPropriedade
      ),
      laboratorio: Laboratorios.find(
        option => option.id === data.selectLaboratorio
      ),
    };

    console.log({ json });

    setTimeout(() => {
      setOpenCadastrado(false);
    }, 2000);
  };

  const onError = (errors: any) => {
    setOpenInvalido(true);
    console.error({ errors });
    setTimeout(() => {
      setOpenInvalido(false);
    }, 2000);
  };

  return (
    <>
      <Paper
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img src='/logo.png' height={30} alt='Logo' />
      </Paper>

      <Paper
        style={{
          display: 'grid',
          gridRowGap: '20px',
          margin: '20px 50px',
        }}
      >
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
              Teste front-end
            </Typography>
            <Button
              color='primary'
              onClick={handleSubmit(onSubmit, onError)}
              variant={'contained'}
            >
              {' '}
              Salvar{' '}
            </Button>
          </Toolbar>
        </AppBar>
        <Box style={{ padding: 30 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormInputText
                name='nome'
                control={control}
                label='Nome'
                error={errors.nome}
              />
            </Grid>
            <Grid item xs={3}>
              <FormInputDate
                name='dataInicial'
                control={control}
                label='Data Inicial'
                error={errors.dataInicial}
              />
            </Grid>
            <Grid item xs={3}>
              <FormInputDate
                name='dataFinal'
                control={control}
                label='Data Final'
                error={errors.dataFinal}
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputPropriedade
                name='selectPropriedade'
                control={control}
                label='Propriedades *'
                error={errors.selectPropriedade}
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputLab
                name='selectLaboratorio'
                control={control}
                label='Laboratório *'
                error={errors.selectLaboratorio}
              />
            </Grid>
            <Grid item xs={12}>
              <FormInputObservacao
                name='observacoes'
                control={control}
                label='Observações'
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Box
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <FeedBack
          message='Cadastro efetuado com sucess!'
          severity='success'
          isOpen={openCadastrado}
          onClose={() => {
            setOpenCadastrado(false);
          }}
        />
        <FeedBack
          message='Preencha todos os campos'
          severity='error'
          isOpen={openInvalido}
          onClose={() => {
            setOpenInvalido(false);
          }}
        />
      </Box>
    </>
  );
};
