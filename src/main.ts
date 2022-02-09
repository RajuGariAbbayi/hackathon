import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExceptionExceptionFilter } from './common/exception-filter/exception-filter.filter';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

/**
 * bootstarp of application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ExceptionExceptionFilter())

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  app.useGlobalInterceptors(new ResponseInterceptor());

  /**
   * documentation for API - swagger config
   */
  let swaggerConfig = new DocumentBuilder()
    .setTitle('hackathon-api')
    .setDescription('Doctor appoinment api documentation')
    .setVersion('1.0')
    .setContact('surya', '', 'suryakumarraju.epuri@hcl.com')
    .addBearerAuth({ type: 'http', bearerFormat: 'JWT', scheme: 'bearer', name: 'header', in: 'header' }, 'swagger-auth')
    .build()

  let document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('hackathon', app, document)
  await app.listen(3000);
}
bootstrap();
